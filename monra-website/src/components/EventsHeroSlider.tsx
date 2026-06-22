'use client'

import { useState, useEffect, useCallback, useRef } from 'react'
import { ImageWithWatermark } from '@/components/ImageWithWatermark'
import { BRAND_ICONS } from '@/lib/brand-logos'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { EVENTS_HERO_SLIDES } from '@/lib/events-images'

const SLIDE_DELAY = 6000

export function EventsHeroSlider() {
  const [current, setCurrent] = useState(0)
  const [barRun, setBarRun] = useState(false)
  const touchStart = useRef(0)
  const total = EVENTS_HERO_SLIDES.length

  const goTo = useCallback((index: number) => {
    setCurrent((index + total) % total)
    setBarRun(false)
    requestAnimationFrame(() => {
      requestAnimationFrame(() => setBarRun(true))
    })
  }, [total])

  const next = useCallback(() => goTo(current + 1), [current, goTo])
  const prev = useCallback(() => goTo(current - 1), [current, goTo])

  useEffect(() => {
    setBarRun(true)
    const timer = setInterval(() => {
      setCurrent(c => (c + 1) % total)
      setBarRun(false)
      requestAnimationFrame(() => {
        requestAnimationFrame(() => setBarRun(true))
      })
    }, SLIDE_DELAY)
    return () => clearInterval(timer)
  }, [total])

  const pad = (n: number) => String(n).padStart(2, '0')

  return (
    <section id="home" className="relative h-[520px] md:h-[640px] overflow-hidden bg-[#080808]" aria-label="Hero slider">
      <div
        className="relative w-full h-full"
        onTouchStart={e => { touchStart.current = e.touches[0].clientX }}
        onTouchEnd={e => {
          const dx = e.changedTouches[0].clientX - touchStart.current
          if (Math.abs(dx) > 48) goTo(dx < 0 ? current + 1 : current - 1)
        }}
      >
        {EVENTS_HERO_SLIDES.map((slide, i) => (
          <div
            key={slide.tag + i}
            className={`absolute inset-0 transition-opacity duration-[900ms] ease-in-out ${
              i === current ? 'opacity-100 z-[2]' : 'opacity-0 z-[1] pointer-events-none'
            }`}
            aria-hidden={i !== current}
          >
            <ImageWithWatermark
              src={slide.image}
              alt={slide.imageAlt}
              fill
              watermarkSrc={BRAND_ICONS.eventsSecurity}
              className={`object-cover object-center transition-transform duration-[6000ms] ease-out ${
                i === current ? 'scale-100' : 'scale-105'
              }`}
              sizes="100vw"
              priority={i === 0}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#080808]/95 via-[#080808]/70 to-[#080808]/30" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-[#080808]/40" />

            <div className="absolute inset-0 flex items-end md:items-center z-[3]">
              <div className="max-w-2xl px-6 pb-28 md:pb-0 md:px-14 md:pl-[max(3.5rem,8%)]">
                <div className="inline-flex items-center gap-2.5 text-[10px] font-bold text-[#EF4444] uppercase tracking-[0.25em] mb-4">
                  <span className="w-9 h-px bg-gradient-to-r from-[#EF4444] to-transparent" />
                  {slide.tag}
                </div>
                <h1 className="font-serif text-3xl md:text-5xl lg:text-6xl font-black text-white leading-tight tracking-tight mb-4">
                  {slide.title}
                  <br />
                  <span className="text-[#EF4444]">{slide.titleAccent}</span>
                </h1>
                <p className="text-sm md:text-base text-white/65 leading-relaxed mb-6 max-w-lg">
                  {slide.description}
                </p>
                <div className="flex flex-wrap gap-3">
                  <a
                    href="mailto:info@monra-events-security.nl"
                    className="inline-flex items-center gap-2 bg-[#DC2626] text-white font-bold text-sm px-6 py-3 rounded hover:bg-[#EF4444] transition-all"
                  >
                    Offerte aanvragen →
                  </a>
                  <a
                    href="#diensten"
                    className="inline-flex items-center text-sm text-white/60 hover:text-[#EF4444] border border-white/20 px-5 py-3 rounded transition-colors"
                  >
                    Onze diensten
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Progress bar */}
      <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-white/5 z-10">
        <div
          className={`h-full bg-gradient-to-r from-[#DC2626] to-[#EF4444] ${barRun ? 'events-bar-run' : 'w-0'}`}
          key={current}
        />
      </div>

      <div className="absolute top-8 right-6 md:right-10 z-10 text-[11px] font-bold text-[#EF4444]/50 tracking-widest">
        {pad(current + 1)} / {pad(total)}
      </div>

      <button
        type="button"
        onClick={prev}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-10 w-11 h-11 rounded-full bg-black/40 border border-white/15 text-white flex items-center justify-center hover:bg-[#DC2626]/80 transition-all hidden sm:flex"
        aria-label="Vorige slide"
      >
        <ChevronLeft size={22} />
      </button>
      <button
        type="button"
        onClick={next}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-10 w-11 h-11 rounded-full bg-[#DC2626]/30 border border-[#EF4444]/40 text-[#EF4444] flex items-center justify-center hover:bg-[#DC2626] hover:text-white transition-all hidden sm:flex"
        aria-label="Volgende slide"
      >
        <ChevronRight size={22} />
      </button>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex gap-2">
        {EVENTS_HERO_SLIDES.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => goTo(i)}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              i === current ? 'w-7 bg-[#EF4444]' : 'w-1.5 bg-white/25 hover:bg-white/40'
            }`}
            aria-label={`Ga naar slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  )
}
