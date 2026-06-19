import { NextRequest, NextResponse } from 'next/server'
import {
  type MonraSite,
  buildMonraSystemPrompt,
  getMonraChatResponse,
} from '@/lib/monra-chat'
import { getModelTryOrder, shouldTryNextModel } from '@/lib/openrouter-models'

type ChatHistoryItem = {
  role: 'user' | 'assistant'
  content: string
}

const VALID_SITES: MonraSite[] = ['security', 'support', 'events']

async function callModel(
  apiKey: string,
  siteUrl: string,
  model: string,
  site: MonraSite,
  message: string,
  history: ChatHistoryItem[],
): Promise<{ text: string | null; status: number }> {
  const res = await fetch('https://openrouter.ai/api/v1/chat/completions', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
      'HTTP-Referer': siteUrl,
      'X-Title': 'Monra Assistent',
    },
    body: JSON.stringify({
      model,
      messages: [
        { role: 'system', content: buildMonraSystemPrompt(site) },
        ...history.slice(-8),
        { role: 'user', content: message },
      ],
      max_tokens: 500,
      temperature: 0.6,
    }),
  })

  if (!res.ok) {
    const errBody = await res.text()
    console.error(`OpenRouter [${model}] error:`, res.status, errBody)
    return { text: null, status: res.status }
  }

  const data = await res.json()
  const text = data?.choices?.[0]?.message?.content?.trim() || null
  return { text, status: 200 }
}

async function callOpenRouter(
  site: MonraSite,
  message: string,
  history: ChatHistoryItem[],
): Promise<{ text: string | null; model: string | null }> {
  const apiKey = process.env.OPENROUTER_API_KEY
  if (!apiKey) return { text: null, model: null }

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://monra-security.nl'
  const models = getModelTryOrder()

  for (const model of models) {
    const { text, status } = await callModel(apiKey, siteUrl, model, site, message, history)
    if (text) return { text, model }

    if (!shouldTryNextModel(status)) break
  }

  return { text: null, model: null }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { site, message, history = [] } = body as {
      site?: MonraSite
      message?: string
      history?: ChatHistoryItem[]
    }

    if (!site || !VALID_SITES.includes(site)) {
      return NextResponse.json({ error: 'Ongeldige site' }, { status: 400 })
    }

    if (!message?.trim()) {
      return NextResponse.json({ error: 'Bericht is verplicht' }, { status: 400 })
    }

    const faqReply = getMonraChatResponse(message.trim(), site)
    const { text: aiText, model: aiModel } = await callOpenRouter(site, message.trim(), history)

    return NextResponse.json({
      text: aiText ?? faqReply.text,
      action: faqReply.action,
      source: aiText ? 'ai' : 'faq',
      model: aiModel,
    })
  } catch (error) {
    console.error('Chat API error:', error)
    return NextResponse.json({ error: 'Er ging iets mis' }, { status: 500 })
  }
}
