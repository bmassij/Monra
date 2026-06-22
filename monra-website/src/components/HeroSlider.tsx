'use client'

import { useState, useEffect, useCallback, useRef } from 'react'
import { ImageWithWatermark } from '@/components/ImageWithWatermark'
import { BRAND_ICONS } from '@/lib/brand-logos'
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
    <section className="relative h-[560px] md:h-[620px] overflow-hidden bg-[#0a1540]" aria-label="Hero slider">
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
              <ImageWithWatermark
                src={slide.image}
                alt={slide.imageAlt}
                fill
                watermarkSrc={BRAND_ICONS.security}
                className={`object-cover object-center transition-transform duration-[6000ms] ease-out ${
                  i === current ? 'scale-100' : 'scale-105'
                }`}
                sizes="(max-width: 768px) 100vw, 62vw"
                priority={i === 0}
              />
              {/* Gradient: foto links helder, naar rechts volledig navy */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#0a1540]/50 to-[#0a1540] md:to-[#0a1540]" />
              {/* Cyan accent streep op de overgang */}
              <div className="absolute top-0 right-0 bottom-0 w-[2px] bg-gradient-to-b from-transparent via-[#11CFE7] to-transparent opacity-50 hidden md:block" />
            </div>

            {/* SVG boog overlay — zelfde principe als de HTML preview */}
            <div className="absolute top-0 bottom-0 hidden md:block" style={{ right: '38%', width: '220px', zIndex: 2 }}>
              <svg viewBox="0 0 220 620" preserveAspectRatio="none" style={{ width: '100%', height: '100%' }}>
                <path d="M0,0 C80,0 140,180 120,310 C100,440 60,560 0,620 L220,620 L220,0 Z" fill="#0a1540" />
              </svg>
            </div>

            {/* Content side */}
            <div className="absolute inset-x-0 bottom-0 md:inset-y-0 md:left-auto md:right-0 md:w-[46%] flex flex-col justify-end md:justify-center px-6 pb-24 pt-32 md:px-14 md:pb-0 md:pt-0 z-[3]"
              style={{ background: 'linear-gradient(to top, #0a1540 60%, transparent)' }}
            >
              {/* Op desktop geen gradient nodig, al gedekt door SVG boog */}
              <div className="md:[background:none]">
                <div className="inline-flex items-center gap-2.5 text-[10px] font-bold text-[#11CFE7] uppercase tracking-[0.25em] mb-4">
                  <span className="w-9 h-px bg-gradient-to-r from-[#11CFE7] to-transparent" />
                  {slide.tag}
                </div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight tracking-tight mb-4">
                  {slide.title}
                  <br />
                  <span className="text-[#11CFE7]">
                    {slide.titleAccent}
                  </span>
                </h2>
                <p className="text-sm md:text-[15px] text-white/65 leading-relaxed mb-5 max-w-md">
                  {slide.description}
                </p>
                <ul className="space-y-2 mb-6">
                  {slide.bullets.map(b => (
                    <li key={b} className="flex items-center gap-2.5 text-xs md:text-sm text-white/80">
                      <CheckCircle size={16} className="text-[#11CFE7] flex-shrink-0" />
                      {b}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap items-center gap-3">
                  <a
                    href={slide.primaryCta.href}
                    className="inline-flex items-center gap-2 bg-[#11CFE7] text-[#1A2B6D] font-black text-sm px-6 py-3 rounded hover:bg-white transition-all shadow-lg shadow-[#11CFE7]/20"
                  >
                    {slide.primaryCta.label}
                    <ArrowRight size={16} />
                  </a>
                  {slide.secondaryCta && (
                    <a
                      href={slide.secondaryCta.href}
                      className="text-sm text-white/60 hover:text-[#11CFE7] border-b border-[#11CFE7]/30 pb-0.5 transition-colors"
                    >
                      {slide.secondaryCta.label}
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Progress bar */}
      <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-white/5 z-10">
        <div
          className={`h-full bg-gradient-to-r from-[#11CFE7] to-[#1A2B6D] ${barRun ? 'hero-bar-run' : 'w-0'}`}
          key={current}
        />
      </div>

      {/* Counter */}
      <div className="absolute top-8 right-6 md:right-10 z-10 text-[11px] font-bold text-[#11CFE7]/40 tracking-widest">
        {pad(current + 1)} / {pad(total)}
      </div>

      {/* Pijl links */}
      <button
        type="button"
        onClick={() => { prev() }}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-10 w-11 h-11 md:w-[52px] md:h-[52px] rounded-full bg-white/10 border border-white/20 text-white flex items-center justify-center hover:bg-white/20 transition-all hidden sm:flex"
        aria-label="Vorige slide"
      >
        <ChevronLeft size={22} />
      </button>

      {/* Pijl rechts */}
      <button
        type="button"
        onClick={() => { next() }}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-10 w-11 h-11 md:w-[52px] md:h-[52px] rounded-full bg-[#11CFE7]/20 border border-[#11CFE7]/40 text-[#11CFE7] flex items-center justify-center hover:bg-[#11CFE7] hover:text-[#1A2B6D] transition-all hidden sm:flex"
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
              i === current ? 'w-7 bg-[#11CFE7]' : 'w-1.5 bg-white/25 hover:bg-white/40'
            }`}
            aria-label={`Ga naar slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  )
}
