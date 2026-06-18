'use client'

import { useState, useEffect, useCallback, useRef } from 'react'
import Image from 'next/image'
import { ArrowRight, ChevronLeft, ChevronRight, CheckCircle } from 'lucide-react'
import { HERO_SLIDES } from '@/lib/images'

const SLIDE_DELAY = 5500

export function HeroSlider() {
  const [current, setCurrent] = useState(0)
  const [barRun, setBarRun] = useState(false)
  const touchStart = useRef(0)
  const total = HERO_SLIDES.length

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
    <section className="relative h-[560px] md:h-[620px] overflow-hidden bg-[#0A0A0A]" aria-label="Hero slider">
      <div
        className="relative w-full h-full"
        onTouchStart={e => { touchStart.current = e.touches[0].clientX }}
        onTouchEnd={e => {
          const dx = e.changedTouches[0].clientX - touchStart.current
          if (Math.abs(dx) > 48) goTo(dx < 0 ? current + 1 : current - 1)
        }}
      >
        {HERO_SLIDES.map((slide, i) => (
          <div
            key={slide.tag}
            className={`absolute inset-0 transition-opacity duration-[900ms] ease-in-out ${
              i === current ? 'opacity-100 z-[2]' : 'opacity-0 z-[1] pointer-events-none'
            }`}
            aria-hidden={i !== current}
          >
            {/* Photo side */}
            <div className="absolute inset-0 md:inset-y-0 md:left-0 md:w-[62%] overflow-hidden">
              <Image
                src={slide.image}
                alt={slide.imageAlt}
                fill
                className={`object-cover object-center transition-transform duration-[6000ms] ease-out ${
                  i === current ? 'scale-100' : 'scale-105'
                }`}
                sizes="(max-width: 768px) 100vw, 62vw"
                priority={i === 0}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A]/10 via-[#0A0A0A]/40 to-[#0A0A0A]/95 md:to-[#0A0A0A]" />
              <div className="absolute top-0 right-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#C9A84C] to-transparent opacity-60 hidden md:block" />
            </div>

            {/* Content side */}
            <div className="absolute inset-x-0 bottom-0 md:inset-y-0 md:left-auto md:right-0 md:w-[48%] flex flex-col justify-end md:justify-center px-6 pb-24 pt-32 md:px-14 md:pb-0 md:pt-0 z-[3] bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/95 to-transparent md:bg-none">
              <div className="inline-flex items-center gap-2.5 text-[10px] font-bold text-[#C9A84C] uppercase tracking-[0.25em] mb-4">
                <span className="w-9 h-px bg-gradient-to-r from-[#C9A84C] to-transparent" />
                {slide.tag}
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight tracking-tight mb-4">
                {slide.title}
                <br />
                <span className="bg-gradient-to-r from-[#C9A84C] to-[#E8C96A] bg-clip-text text-transparent">
                  {slide.titleAccent}
                </span>
              </h2>
              <p className="text-sm md:text-[15px] text-[#888] leading-relaxed mb-5 max-w-md">
                {slide.description}
              </p>
              <ul className="space-y-2 mb-6">
                {slide.bullets.map(b => (
                  <li key={b} className="flex items-center gap-2.5 text-xs md:text-sm text-[#aaa]">
                    <CheckCircle size={16} className="text-[#C9A84C] flex-shrink-0" />
                    {b}
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href={slide.primaryCta.href}
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-[#C9A84C] to-[#A07A2A] text-black font-bold text-sm px-6 py-3 rounded-full hover:from-[#E8C96A] hover:to-[#C9A84C] transition-all shadow-lg shadow-[#C9A84C]/20"
                >
                  {slide.primaryCta.label}
                  <ArrowRight size={16} />
                </a>
                {slide.secondaryCta && (
                  <a
                    href={slide.secondaryCta.href}
                    className="text-sm text-[#888] hover:text-[#C9A84C] border-b border-[#C9A84C]/30 pb-0.5 transition-colors"
                  >
                    {slide.secondaryCta.label}
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Progress bar */}
      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-white/5 z-10">
        <div
          className={`h-full bg-gradient-to-r from-[#C9A84C] to-[#E8C96A] ${barRun ? 'hero-bar-run' : 'w-0'}`}
          key={current}
        />
      </div>

      {/* Counter */}
      <div className="absolute top-8 right-6 md:right-10 z-10 text-[11px] font-bold text-[#C9A84C]/40 tracking-widest">
        {pad(current + 1)} / {pad(total)}
      </div>

      {/* Arrows */}
      <button
        type="button"
        onClick={() => { prev() }}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-10 w-11 h-11 md:w-[52px] md:h-[52px] rounded-full bg-white/10 border border-white/20 text-white flex items-center justify-center hover:bg-white/20 transition-all hidden sm:flex"
        aria-label="Vorige slide"
      >
        <ChevronLeft size={22} />
      </button>
      <button
        type="button"
        onClick={() => { next() }}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-10 w-11 h-11 md:w-[52px] md:h-[52px] rounded-full bg-[#C9A84C]/20 border border-[#C9A84C]/40 text-[#C9A84C] flex items-center justify-center hover:bg-[#C9A84C] hover:text-black transition-all hidden sm:flex"
        aria-label="Volgende slide"
      >
        <ChevronRight size={22} />
      </button>

      {/* Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex gap-2">
        {HERO_SLIDES.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => goTo(i)}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              i === current ? 'w-7 bg-[#C9A84C]' : 'w-1.5 bg-white/25 hover:bg-white/40'
            }`}
            aria-label={`Ga naar slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  )
}
