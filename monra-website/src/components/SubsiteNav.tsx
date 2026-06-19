'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X, Phone } from 'lucide-react'

export type SubsiteNavLink = { label: string; href: string }

type FamilieLink = { label: string; href: string }

type SubsiteNavProps = {
  theme: 'support' | 'events'
  siteName: string
  logoSrc?: string
  logoAlt?: string
  navLinks: SubsiteNavLink[]
  ctaLabel: string
  ctaHref: string
  phone?: string
  familieLinks: FamilieLink[]
}

const THEMES = {
  support: {
    bannerBg: '#062E26',
    bannerBorder: 'rgba(26,191,161,.2)',
    bannerText: 'rgba(255,255,255,.55)',
    bannerStrong: '#fff',
    pillBorder: 'rgba(255,255,255,.2)',
    pillHover: '#1ABFA1',
    navBg: '#fff',
    navBorder: '#d1ede7',
    navText: '#0E5C4B',
    navHover: '#1ABFA1',
    ctaBg: '#0E5C4B',
    ctaHover: '#1ABFA1',
    ctaText: '#fff',
  },
  events: {
    bannerBg: '#0a0a0a',
    bannerBorder: 'rgba(220,38,38,.15)',
    bannerText: 'rgba(255,255,255,.45)',
    bannerStrong: '#EF4444',
    pillBorder: 'rgba(255,255,255,.12)',
    pillHover: '#EF4444',
    navBg: '#0a0a0a',
    navBorder: 'rgba(220,38,38,.15)',
    navText: 'rgba(255,255,255,.85)',
    navHover: '#EF4444',
    ctaBg: '#DC2626',
    ctaHover: '#EF4444',
    ctaText: '#fff',
  },
}

export function SubsiteNav({
  theme,
  siteName,
  logoSrc,
  logoAlt,
  navLinks,
  ctaLabel,
  ctaHref,
  phone = '0645398678',
  familieLinks,
}: SubsiteNavProps) {
  const [open, setOpen] = useState(false)
  const t = THEMES[theme]

  return (
    <header style={{ position: 'sticky', top: 0, zIndex: 50 }}>
      {/* Familie-balk */}
      <div style={{
        background: t.bannerBg,
        borderBottom: `1px solid ${t.bannerBorder}`,
        padding: '8px 24px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: 8,
      }}>
        <span style={{ fontSize: 11, color: t.bannerText }}>
          Onderdeel van <strong style={{ color: t.bannerStrong }}>Monra Groep</strong>
        </span>
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
          {familieLinks.map(link => (
            <Link
              key={link.href}
              href={link.href}
              style={{
                fontSize: 11,
                color: t.bannerText,
                border: `1px solid ${t.pillBorder}`,
                borderRadius: 20,
                padding: '3px 12px',
                textDecoration: 'none',
                transition: 'color .2s, border-color .2s',
              }}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>

      {/* Hoofdnavigatie */}
      <nav style={{
        background: t.navBg,
        borderBottom: `1px solid ${t.navBorder}`,
        boxShadow: theme === 'support' ? '0 1px 8px rgba(14,92,75,.08)' : 'none',
      }}>
        <div style={{
          maxWidth: 1200,
          margin: '0 auto',
          padding: '0 24px',
          height: 72,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 16,
        }}>
          {/* Logo / sitenaam */}
          <a href="#home" style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none', flexShrink: 0 }}>
            {logoSrc ? (
              <Image
                src={logoSrc}
                alt={logoAlt ?? siteName}
                width={160}
                height={56}
                style={{ height: 44, width: 'auto', objectFit: 'contain' }}
                priority
              />
            ) : (
              <span style={{
                fontSize: 18,
                fontWeight: 900,
                color: t.navText,
                letterSpacing: '-0.02em',
              }}>
                Monra <span style={{ color: t.navHover }}>Support</span>
              </span>
            )}
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex" style={{ alignItems: 'center', gap: 28 }}>
            {navLinks.map(link => (
              <a
                key={link.href}
                href={link.href}
                style={{
                  fontSize: 11,
                  fontWeight: 700,
                  color: t.navText,
                  textDecoration: 'none',
                  textTransform: 'uppercase',
                  letterSpacing: '0.12em',
                  transition: 'color .2s',
                }}
                onMouseEnter={e => { e.currentTarget.style.color = t.navHover }}
                onMouseLeave={e => { e.currentTarget.style.color = t.navText }}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop CTA + telefoon */}
          <div className="hidden md:flex" style={{ alignItems: 'center', gap: 16, flexShrink: 0 }}>
            <a
              href={`tel:${phone}`}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 6,
                fontSize: 13,
                fontWeight: 600,
                color: t.navText,
                textDecoration: 'none',
              }}
            >
              <Phone size={14} style={{ color: t.navHover }} />
              06 45398678
            </a>
            <a
              href={ctaHref}
              style={{
                background: t.ctaBg,
                color: t.ctaText,
                fontWeight: 800,
                fontSize: 13,
                padding: '10px 20px',
                borderRadius: 6,
                textDecoration: 'none',
                whiteSpace: 'nowrap',
              }}
            >
              {ctaLabel}
            </a>
          </div>

          {/* Mobile burger */}
          <button
            type="button"
            className="md:hidden"
            onClick={() => setOpen(!open)}
            style={{ background: 'none', border: 'none', color: t.navText, cursor: 'pointer', padding: 4 }}
            aria-label="Menu"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="md:hidden" style={{
            borderTop: `1px solid ${t.navBorder}`,
            padding: '16px 24px 24px',
            display: 'flex',
            flexDirection: 'column',
            gap: 4,
            background: t.navBg,
          }}>
            {navLinks.map(link => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                style={{
                  fontSize: 14,
                  fontWeight: 700,
                  color: t.navText,
                  textDecoration: 'none',
                  padding: '10px 0',
                  borderBottom: `1px solid ${t.navBorder}`,
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                }}
              >
                {link.label}
              </a>
            ))}
            <a
              href={`tel:${phone}`}
              style={{ fontSize: 14, color: t.navText, textDecoration: 'none', padding: '12px 0', fontWeight: 600 }}
            >
              📞 06 45398678
            </a>
            <a
              href={ctaHref}
              onClick={() => setOpen(false)}
              style={{
                marginTop: 8,
                background: t.ctaBg,
                color: t.ctaText,
                fontWeight: 800,
                fontSize: 14,
                padding: '14px',
                borderRadius: 6,
                textDecoration: 'none',
                textAlign: 'center',
              }}
            >
              {ctaLabel}
            </a>
          </div>
        )}
      </nav>
    </header>
  )
}
