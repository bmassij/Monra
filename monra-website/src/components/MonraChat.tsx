'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { MessageCircle, Send, X, Shield, Sparkles, Bot } from 'lucide-react'
import { ChatMessageBody } from '@/components/ChatMessageBody'
import {
  type MonraSite,
  type ChatReply,
  CHAT_GREETINGS,
  QUICK_REPLIES,
  getMonraChatResponse,
  getSiteTheme,
} from '@/lib/monra-chat'

type ChatMessage = {
  role: 'user' | 'bot'
  text: string
  action?: { label: string; href: string }
  source?: 'ai' | 'faq'
}

type MonraChatProps = {
  site: MonraSite
}

function HandshakeIcon({ size = 18, className = '' }: { size?: number; className?: string }) {
  return <span className={className} style={{ fontSize: size }} aria-hidden>🤝</span>
}

function BotAvatar({ site }: { site: MonraSite }) {
  const theme = getSiteTheme(site)
  return (
    <div
      className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
      style={{ background: `${theme.accent}22`, border: `1px solid ${theme.accent}55` }}
    >
      {site === 'security' && <Shield size={13} style={{ color: theme.accent }} />}
      {site === 'support' && <span style={{ fontSize: 11 }}>🤝</span>}
      {site === 'events' && <Sparkles size={13} style={{ color: theme.accent }} />}
    </div>
  )
}

export function MonraChat({ site }: MonraChatProps) {
  const theme = getSiteTheme(site)
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'bot', text: CHAT_GREETINGS[site], source: 'faq' },
  ])
  const [input, setInput] = useState('')
  const [typing, setTyping] = useState(false)
  const bottomRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, typing])

  const addBotReply = (reply: ChatReply & { source?: 'ai' | 'faq' }) => {
    setMessages(prev => [
      ...prev,
      { role: 'bot', text: reply.text, action: reply.action, source: reply.source },
    ])
  }

  const sendMessage = async (text: string) => {
    if (!text.trim() || typing) return
    const userMsg = text.trim()
    setInput('')
    setMessages(prev => [...prev, { role: 'user', text: userMsg }])
    setTyping(true)

    try {
      const history = messages.map(m => ({
        role: (m.role === 'user' ? 'user' : 'assistant') as 'user' | 'assistant',
        content: m.text,
      }))

      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ site, message: userMsg, history }),
      })

      if (!res.ok) throw new Error('Chat request failed')

      const data = (await res.json()) as ChatReply & { source?: 'ai' | 'faq' }
      addBotReply({
        text: data.text,
        action: data.action,
        source: data.source === 'ai' ? 'ai' : 'faq',
      })
    } catch {
      addBotReply({ ...getMonraChatResponse(userMsg, site), source: 'faq' })
    } finally {
      setTyping(false)
    }
  }

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full flex items-center justify-center shadow-xl transition-all hover:scale-105"
        style={{
          background: theme.primary,
          border: `2px solid ${theme.accent}`,
          boxShadow: `0 8px 32px ${theme.accent}44`,
        }}
        aria-label="Open chat"
      >
        {open ? (
          <X size={22} className="text-white" />
        ) : (
          <MessageCircle size={22} style={{ color: site === 'support' ? theme.accent : '#fff' }} />
        )}
      </button>

      {open && (
        <div
          className="fixed bottom-24 right-6 z-50 w-[22rem] md:w-[26rem] bg-white border border-slate-200 rounded-2xl shadow-2xl overflow-hidden flex flex-col"
          style={{ height: '520px', boxShadow: `0 20px 60px ${theme.primary}22` }}
        >
          <div
            className="px-5 py-4 flex items-center gap-3"
            style={{ background: theme.primary, borderBottom: `2px solid ${theme.accent}` }}
          >
            <div
              className="w-9 h-9 rounded-full flex items-center justify-center"
              style={{ background: `${theme.accent}22`, border: `1px solid ${theme.accent}66` }}
            >
              <Bot size={18} style={{ color: theme.accent }} />
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-white font-bold text-sm tracking-wide">{theme.label}</div>
              <div className="text-white/60 text-xs flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 bg-green-400 rounded-full inline-block animate-pulse" />
                AI assistent · Kent alle 3 Monra-takken
              </div>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gradient-to-b from-slate-50 to-white">
            {messages.map((m, i) => (
              <div
                key={i}
                className={`flex gap-2 ${m.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}
              >
                {m.role === 'bot' && <BotAvatar site={site} />}

                <div
                  className={`flex flex-col max-w-[85%] ${m.role === 'user' ? 'items-end' : 'items-start'}`}
                >
                  <div
                    className={`rounded-2xl px-4 py-3 ${
                      m.role === 'user'
                        ? 'text-white font-medium rounded-br-md shadow-sm'
                        : 'bg-white text-slate-700 border rounded-bl-md shadow-sm'
                    }`}
                    style={
                      m.role === 'user'
                        ? { background: `linear-gradient(135deg, ${theme.primary}, ${theme.primary}dd)` }
                        : { borderColor: `${theme.accent}33`, borderLeftWidth: 3, borderLeftColor: theme.accent }
                    }
                  >
                    <ChatMessageBody text={m.text} site={site} role={m.role} />
                  </div>

                  {m.action && (
                    <Link
                      href={m.action.href}
                      onClick={() => setOpen(false)}
                      className="mt-2 text-xs font-bold px-4 py-2 rounded-full border transition-all hover:scale-[1.02]"
                      style={{
                        color: theme.primary,
                        borderColor: `${theme.accent}66`,
                        background: `linear-gradient(135deg, ${theme.accent}15, ${theme.accent}08)`,
                      }}
                    >
                      {m.action.label}
                    </Link>
                  )}
                </div>
              </div>
            ))}

            {typing && (
              <div className="flex gap-2 items-start">
                <BotAvatar site={site} />
                <div
                  className="bg-white border rounded-2xl rounded-bl-md px-4 py-3 flex gap-1.5 items-center shadow-sm"
                  style={{ borderColor: `${theme.accent}33`, borderLeftWidth: 3, borderLeftColor: theme.accent }}
                >
                  {[0, 150, 300].map(delay => (
                    <span
                      key={delay}
                      className="w-2 h-2 rounded-full animate-bounce"
                      style={{ background: theme.accent, animationDelay: `${delay}ms` }}
                    />
                  ))}
                  <span className="text-xs text-slate-400 ml-1">Denkt na...</span>
                </div>
              </div>
            )}
            <div ref={bottomRef} />
          </div>

          <div
            className="px-4 py-2.5 flex gap-2 flex-wrap border-t"
            style={{ borderColor: `${theme.accent}22`, background: `${theme.accent}06` }}
          >
            {QUICK_REPLIES[site].map(q => (
              <button
                key={q}
                type="button"
                onClick={() => sendMessage(q)}
                className="text-xs font-bold border rounded-full px-3 py-1.5 transition-all hover:scale-[1.03]"
                style={{
                  color: theme.primary,
                  borderColor: `${theme.accent}55`,
                  background: 'white',
                }}
              >
                {q}
              </button>
            ))}
          </div>

          <div className="p-4 border-t border-slate-200 flex gap-2 bg-white">
            <input
              type="text"
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && sendMessage(input)}
              placeholder="Stel een vraag..."
              className="flex-1 bg-slate-50 border rounded-xl px-4 py-2.5 text-sm focus:outline-none transition-all"
              style={{
                color: theme.primary,
                borderColor: `${theme.accent}33`,
              }}
            />
            <button
              type="button"
              onClick={() => sendMessage(input)}
              disabled={typing || !input.trim()}
              className="w-10 h-10 rounded-xl flex items-center justify-center transition-all flex-shrink-0 disabled:opacity-40 hover:scale-105"
              style={{ background: theme.primary }}
            >
              <Send size={15} className="text-white" />
            </button>
          </div>
        </div>
      )}
    </>
  )
}
