'use client'

import { useState, useEffect, useCallback, useRef } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { CLIENT_REFERENCES, type ClientReference } from '@/lib/references'

const AUTO_DELAY = 4500
const CARD_WIDTH = 200
const GAP = 16

function ReferenceCard({ client }: { client: ClientReference }) {
  const isDark = client.card === 'dark'

  return (
    <div
      className={`group relative flex-shrink-0 w-[180px] sm:w-[200px] h-[120px] sm:h-[130px] rounded-xl border-2 overflow-hidden transition-all duration-300 hover:scale-[1.03] hover:shadow-lg ${
        isDark
          ? 'bg-[#0a1540] border-[#11CFE7]/25 hover:border-[#11CFE7]/60'
          : 'bg-white border-slate-200 hover:border-[#11CFE7]'
      }`}
      title={client.name}
    >
      <div className="absolute top-0 left-0 w-0 h-0 border-t-2 border-l-2 border-[#11CFE7] transition-all duration-300 group-hover:w-6 group-hover:h-6 z-10" />
      <div className="relative w-full h-full p-4 flex items-center justify-center">
        <Image
          src={client.image}
          alt={client.alt ?? client.name}
          fill
          className={`object-contain p-2 transition-transform duration-500 group-hover:scale-105 ${
            isDark ? 'brightness-95' : ''
          }`}
          sizes="200px"
          unoptimized={client.image.endsWith('.gif')}
        />
      </div>
      <div
        className={`absolute bottom-0 inset-x-0 py-1.5 px-2 text-center text-[10px] font-bold uppercase tracking-wide truncate ${
          isDark ? 'bg-[#1A2B6D]/90 text-white/70' : 'bg-[#f0f6ff] text-[#1A2B6D]/70'
        }`}
      >
        {client.name}
      </div>
    </div>
  )
}

export function ReferenceSlider() {
  const trackRef = useRef<HTMLDivElement>(null)
  const [offset, setOffset] = useState(0)
  const [paused, setPaused] = useState(false)
  const [visibleCount, setVisibleCount] = useState(3)
  const total = CLIENT_REFERENCES.length
  const step = CARD_WIDTH + GAP

  useEffect(() => {
    const update = () => {
      const w = window.innerWidth
      setVisibleCount(w >= 1024 ? 5 : w >= 640 ? 3 : 2)
    }
    update()
    window.addEventListener('resize', update)
    return () => window.removeEventListener('resize', update)
  }, [])

  const maxOffset = Math.max(0, total - visibleCount)

  const goTo = useCallback((index: number) => {
    setOffset(Math.max(0, Math.min(index, maxOffset)))
  }, [maxOffset])

  const next = useCallback(() => {
    setOffset(prev => (prev >= maxOffset ? 0 : prev + 1))
  }, [maxOffset])

  const prev = useCallback(() => {
    setOffset(prev => (prev <= 0 ? maxOffset : prev - 1))
  }, [maxOffset])

  useEffect(() => {
    if (paused || maxOffset === 0) return
    const timer = setInterval(next, AUTO_DELAY)
    return () => clearInterval(timer)
  }, [paused, next, maxOffset])

  const touchStart = useRef(0)

  return (
    <section id="referenties" className="py-16 md:py-20 bg-[#1A2B6D] relative overflow-hidden">
      {/* Subtle cyan glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 rounded-full bg-[#11CFE7]/5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 mb-10 relative">
        <div className="text-xs font-bold text-[#11CFE7] tracking-[4px] uppercase mb-3">Vertrouwd door</div>
        <div className="w-10 h-1 bg-[#11CFE7] mb-5 rounded" />
        <h2 className="text-3xl md:text-4xl font-black text-white">
          ONZE <span className="text-[#11CFE7]">REFERENTIES</span>
        </h2>
        <p className="text-white/55 mt-3 max-w-xl">
          Festivals, poppodia, horeca en evenementen — wij beveiligen o.a. deze locaties en organisaties.
        </p>
      </div>

      <div
        className="relative max-w-7xl mx-auto px-6"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <div
          className="overflow-hidden py-2"
          onTouchStart={e => { touchStart.current = e.touches[0].clientX }}
          onTouchEnd={e => {
            const dx = e.changedTouches[0].clientX - touchStart.current
            if (Math.abs(dx) > 48) (dx < 0 ? next : prev)()
          }}
        >
          <div
            ref={trackRef}
            className="flex gap-4 transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${offset * step}px)` }}
          >
            {CLIENT_REFERENCES.map(client => (
              <ReferenceCard key={client.slug} client={client} />
            ))}
          </div>
        </div>

        {/* Progress bar */}
        <div className="mt-8 h-[3px] bg-white/10 rounded-full overflow-hidden max-w-md mx-auto">
          <div
            className="h-full bg-gradient-to-r from-[#11CFE7] to-[#1A2B6D] transition-all duration-700 ease-out"
            style={{ width: `${maxOffset === 0 ? 100 : ((offset + visibleCount) / total) * 100}%` }}
          />
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-center gap-4 mt-6">
          <button
            type="button"
            onClick={prev}
            className="w-10 h-10 rounded-full bg-white/10 border border-white/20 text-white flex items-center justify-center hover:bg-[#11CFE7] hover:text-[#1A2B6D] hover:border-[#11CFE7] transition-all"
            aria-label="Vorige referenties"
          >
            <ChevronLeft size={20} />
          </button>

          <div className="flex gap-1.5">
            {Array.from({ length: maxOffset + 1 }).map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => goTo(i)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === offset ? 'w-7 bg-[#11CFE7]' : 'w-1.5 bg-white/25 hover:bg-white/40'
                }`}
                aria-label={`Ga naar positie ${i + 1}`}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={next}
            className="w-10 h-10 rounded-full bg-[#11CFE7]/20 border border-[#11CFE7]/40 text-[#11CFE7] flex items-center justify-center hover:bg-[#11CFE7] hover:text-[#1A2B6D] transition-all"
            aria-label="Volgende referenties"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        {/* Category ticker — from original preview */}
        <div className="mt-10 pt-8 border-t border-white/10">
          <div className="flex flex-wrap gap-x-6 gap-y-2 items-center justify-center">
            <span className="text-[10px] text-white/40 uppercase tracking-[3px] font-bold">Wij beveiligen o.a.</span>
            {['Festivals', 'Concerten', 'Voetbal', 'Congressen', 'Beurzen', 'Sportevenementen', 'Bedrijfsfeesten', 'VIP Events'].map(item => (
              <span key={item} className="text-xs font-bold text-[#11CFE7] flex items-center gap-2">
                <span className="text-[8px] opacity-60">◆</span>
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
