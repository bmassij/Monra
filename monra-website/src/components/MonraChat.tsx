'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { MessageCircle, Send, X, Shield, Sparkles } from 'lucide-react'
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
}

type MonraChatProps = {
  site: MonraSite
}

function HandshakeIcon({ size = 18, className = '' }: { size?: number; className?: string }) {
  return <span className={className} style={{ fontSize: size }} aria-hidden>🤝</span>
}

export function MonraChat({ site }: MonraChatProps) {
  const theme = getSiteTheme(site)
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'bot', text: CHAT_GREETINGS[site] },
  ])
  const [input, setInput] = useState('')
  const [typing, setTyping] = useState(false)
  const bottomRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, typing])

  const addBotReply = (reply: ChatReply) => {
    setMessages(prev => [...prev, { role: 'bot', text: reply.text, action: reply.action }])
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

      const data = (await res.json()) as ChatReply & { source?: string }
      addBotReply({ text: data.text, action: data.action })
    } catch {
      addBotReply(getMonraChatResponse(userMsg, site))
    } finally {
      setTyping(false)
    }
  }

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full flex items-center justify-center shadow-xl transition-all"
        style={{
          background: theme.primary,
          border: `2px solid ${theme.accent}`,
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
          className="fixed bottom-24 right-6 z-50 w-80 md:w-96 bg-white border border-slate-200 rounded-2xl shadow-2xl overflow-hidden flex flex-col"
          style={{ height: '480px' }}
        >
          <div
            className="px-5 py-4 flex items-center gap-3"
            style={{ background: theme.primary, borderBottom: `2px solid ${theme.accent}` }}
          >
            {site === 'security' && <Shield size={18} style={{ color: theme.accent }} />}
            {site === 'support' && <HandshakeIcon size={20} className="text-[#1ABFA1]" />}
            {site === 'events' && <Sparkles size={18} style={{ color: theme.accent }} />}
            <div>
              <div className="text-white font-bold text-sm">{theme.label}</div>
              <div className="text-white/60 text-xs flex items-center gap-1">
                <span className="w-1.5 h-1.5 bg-green-400 rounded-full inline-block" />
                AI assistent • Kent alle 3 Monra-takken
              </div>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-slate-50">
            {messages.map((m, i) => (
              <div key={i} className={`flex flex-col ${m.role === 'user' ? 'items-end' : 'items-start'}`}>
                <div
                  className={`max-w-[88%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed whitespace-pre-line ${
                    m.role === 'user'
                      ? 'text-white font-medium rounded-br-sm'
                      : 'bg-white text-slate-700 border border-slate-200 rounded-bl-sm'
                  }`}
                  style={m.role === 'user' ? { background: theme.primary } : undefined}
                >
                  {m.text}
                </div>
                {m.action && (
                  <Link
                    href={m.action.href}
                    onClick={() => setOpen(false)}
                    className="mt-2 text-xs font-bold px-3 py-1.5 rounded-full border transition-colors"
                    style={{
                      color: theme.primary,
                      borderColor: `${theme.accent}66`,
                      background: `${theme.accent}11`,
                    }}
                  >
                    {m.action.label}
                  </Link>
                )}
              </div>
            ))}
            {typing && (
              <div className="flex justify-start">
                <div className="bg-white border border-slate-200 rounded-2xl px-4 py-3 flex gap-1.5 items-center rounded-bl-sm">
                  {[0, 150, 300].map(delay => (
                    <span
                      key={delay}
                      className="w-1.5 h-1.5 rounded-full animate-bounce"
                      style={{ background: theme.accent, animationDelay: `${delay}ms` }}
                    />
                  ))}
                </div>
              </div>
            )}
            <div ref={bottomRef} />
          </div>

          <div className="px-4 pb-2 pt-2 flex gap-2 flex-wrap border-t border-slate-100">
            {QUICK_REPLIES[site].map(q => (
              <button
                key={q}
                type="button"
                onClick={() => sendMessage(q)}
                className="text-xs font-semibold border rounded-full px-3 py-1 transition-colors"
                style={{
                  color: theme.primary,
                  borderColor: `${theme.primary}40`,
                }}
              >
                {q}
              </button>
            ))}
          </div>

          <div className="p-4 border-t border-slate-200 flex gap-2">
            <input
              type="text"
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && sendMessage(input)}
              placeholder="Stel een vraag..."
              className="flex-1 bg-slate-50 border border-slate-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none transition-colors"
              style={{ color: theme.primary }}
            />
            <button
              type="button"
              onClick={() => sendMessage(input)}
              className="w-10 h-10 rounded-lg flex items-center justify-center transition-all flex-shrink-0"
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
