'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X, Phone } from 'lucide-react'
import type { FamilieNavLink } from '@/lib/subsite-nav'

export type SubsiteNavLink = { label: string; href: string }

type SubsiteNavProps = {
  theme: 'support' | 'events'
  siteName: string
  logoSrc?: string
  logoAlt?: string
  /** Behoud kleuren in familie-balk (bijv. groen Support-logo op donkergroene balk) */
  logoPreserveColors?: boolean
  navLinks: SubsiteNavLink[]
  ctaLabel: string
  ctaHref: string
  phone?: string
  familieLinks: FamilieNavLink[]
}

const THEMES = {
  support: {
    bannerBg: '#062E26',
    bannerBorder: 'rgba(255,255,255,.12)',
    bannerText: 'rgba(255,255,255,.75)',
    pillBorder: 'rgba(255,255,255,.15)',
    pillHover: '#1ABFA1',
    navBg: '#fff',
    navBorder: '#0E5C4B',
    navBorderWidth: 3,
    navText: '#0E5C4B',
    navHover: '#1ABFA1',
    ctaBg: '#0E5C4B',
    ctaHover: '#1ABFA1',
    ctaText: '#fff',
    navHeight: 78,
    navShadow: '0 2px 20px rgba(14,92,75,.12)',
  },
  events: {
    bannerBg: '#0a0a0a',
    bannerBorder: 'rgba(220,38,38,.15)',
    bannerText: 'rgba(255,255,255,.45)',
    pillBorder: 'rgba(255,255,255,.12)',
    pillHover: '#EF4444',
    navBg: '#0a0a0a',
    navBorder: 'rgba(220,38,38,.15)',
    navBorderWidth: 1,
    navText: 'rgba(255,255,255,.85)',
    navHover: '#EF4444',
    ctaBg: '#DC2626',
    ctaHover: '#EF4444',
    ctaText: '#fff',
    navHeight: 72,
    navShadow: 'none',
  },
}

export function SubsiteNav({
  theme,
  siteName,
  logoSrc,
  logoAlt,
  logoPreserveColors = theme === 'support',
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
        borderBottom: `2px solid ${t.bannerBorder}`,
        padding: '12px 24px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: 10,
        boxShadow: '0 4px 12px rgba(0,0,0,.15)',
      }}>
        {logoSrc ? (
          <Link href="#home" style={{ display: 'flex', alignItems: 'center', flexShrink: 0, textDecoration: 'none' }}>
            <Image
              src={logoSrc}
              alt={logoAlt ?? siteName}
              width={180}
              height={70}
              style={{
                height: 44,
                width: 'auto',
                objectFit: 'contain',
                ...(logoPreserveColors ? {} : { filter: 'brightness(0) invert(1)' }),
              }}
              priority
            />
          </Link>
        ) : (
          <span style={{ fontSize: 14, color: t.bannerText, fontWeight: 500 }}>
            Onderdeel van <strong style={{ color: '#fff', fontWeight: 800 }}>Monra Groep</strong>
          </span>
        )}
        <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', justifyContent: 'flex-end' }}>
          {familieLinks.map(link => (
            <Link
              key={link.href}
              href={link.href}
              style={{
                fontSize: 13,
                fontWeight: 600,
                color: t.bannerText,
                border: `2px solid ${t.pillBorder}`,
                borderRadius: 20,
                padding: '5px 14px',
                textDecoration: 'none',
                transition: 'color .2s, border-color .2s, background .2s',
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
              }}
              onMouseEnter={e => {
                e.currentTarget.style.color = t.pillHover
                e.currentTarget.style.borderColor = `${t.pillHover}99`
                e.currentTarget.style.background = 'rgba(255,255,255,.05)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.color = t.bannerText
                e.currentTarget.style.borderColor = t.pillBorder
                e.currentTarget.style.background = 'transparent'
              }}
            >
              <Image
                src={link.icon}
                alt=""
                width={18}
                height={18}
                style={{ width: 18, height: 18, objectFit: 'contain', flexShrink: 0 }}
                aria-hidden
              />
              {link.label}
            </Link>
          ))}
        </div>
      </div>

      {/* Hoofdnavigatie */}
      <nav style={{
        background: t.navBg,
        borderBottom: `${t.navBorderWidth}px solid ${t.navBorder}`,
        boxShadow: t.navShadow,
      }}>
        <div style={{
          maxWidth: 1280,
          margin: '0 auto',
          padding: '0 48px',
          height: t.navHeight,
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
                style={{ height: 50, width: 'auto', objectFit: 'contain' }}
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
          <div className="hidden md:flex" style={{ alignItems: 'center', gap: 32 }}>
            {navLinks.map(link => (
              <a
                key={link.href}
                href={link.href}
                style={{
                  fontSize: theme === 'support' ? 13 : 11,
                  fontWeight: 700,
                  color: t.navText,
                  textDecoration: 'none',
                  textTransform: 'uppercase',
                  letterSpacing: theme === 'support' ? '0.8px' : '0.12em',
                  padding: theme === 'support' ? '6px 0' : undefined,
                  borderBottom: theme === 'support' ? '2px solid transparent' : undefined,
                  transition: 'color .2s, border-color .2s',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.color = t.navHover
                  if (theme === 'support') e.currentTarget.style.borderBottomColor = t.navHover
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.color = t.navText
                  if (theme === 'support') e.currentTarget.style.borderBottomColor = 'transparent'
                }}
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
                padding: '10px 22px',
                borderRadius: theme === 'support' ? 4 : 6,
                textDecoration: 'none',
                whiteSpace: 'nowrap',
                transition: 'background .2s',
              }}
              onMouseEnter={e => { e.currentTarget.style.background = t.ctaHover }}
              onMouseLeave={e => { e.currentTarget.style.background = t.ctaBg }}
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
                  borderBottom: `1px solid ${theme === 'support' ? '#d1ede7' : t.navBorder}`,
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
              06 45398678
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
