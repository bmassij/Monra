export type CookieCategory = 'necessary' | 'analytics' | 'marketing'

export type CookieConsent = {
  necessary: true
  analytics: boolean
  marketing: boolean
  timestamp: number
  version: number
}

const STORAGE_KEY = 'monra_cookie_consent'
const CONSENT_VERSION = 1
const EXPIRY_DAYS = 365

export function getConsentExpiryMs(): number {
  return EXPIRY_DAYS * 24 * 60 * 60 * 1000
}

export function readCookieConsent(): CookieConsent | null {
  if (typeof window === 'undefined') return null
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return null
    const parsed = JSON.parse(raw) as CookieConsent
    if (parsed.version !== CONSENT_VERSION) return null
    if (Date.now() - parsed.timestamp > getConsentExpiryMs()) {
      localStorage.removeItem(STORAGE_KEY)
      return null
    }
    return parsed
  } catch {
    return null
  }
}

export function saveCookieConsent(analytics: boolean, marketing: boolean): CookieConsent {
  const consent: CookieConsent = {
    necessary: true,
    analytics,
    marketing,
    timestamp: Date.now(),
    version: CONSENT_VERSION,
  }
  localStorage.setItem(STORAGE_KEY, JSON.stringify(consent))
  window.dispatchEvent(new CustomEvent('monra-cookie-consent', { detail: consent }))
  return consent
}

export function hasConsentDecision(): boolean {
  return readCookieConsent() !== null
}
