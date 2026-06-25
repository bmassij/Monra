# Monra Website — Project State (living memory)

> **Laatst bijgewerkt:** 22 juni 2026  
> **GitHub:** https://github.com/bmassij/Monra  
> **Vercel root directory:** `monra-website`  
> **HEAD commit:** `ec0a39b` (+ lokale chat/Belgium updates nog te pushen)

Dit document is het **projectgeheugen**. Update bij elke significante wijziging.

---

## Site-structuur (5 routes)

| Route | Site | Chat AI | Thema |
|-------|------|---------|-------|
| `/` | Monra Security (NL) | ✅ `site="security"` | Blauw `#1A2B6D` / cyaan `#11CFE7` |
| `/support` | Monra Support | ✅ `site="support"` | Groen `#3CB138` / `#2A8A2A` |
| `/events-security` | Monra Events Security | ✅ `site="events"` | Donker / rood `#EF4444` |
| `/belgie` | Monra Belgium | ✅ `site="belgium"` | Blauw (zelfde als NL) |
| `/groep` | Monra Groep + quiz | ❌ | Multi-brand |

**API:** `/api/chat` (OpenRouter), `/api/contact` (Resend uit, log only)

---

## Git commits — chronologisch (recent)

### 22 jun 2026 — Monra Belgium (door bmassij op GitHub)
| Commit | Beschrijving |
|--------|--------------|
| `b0b729f` | Nieuwe pagina `/belgie` (~440 regels) + 4e kaart op `/groep` |
| `ec0a39b` | Belgium-links: familie-banner `/`, subsite-nav Support/Events, groep footer |

**`/belgie` inhoud:**
- Hero, diensten (evenementen, surveillance, toegangscontrole)
- Werkgebied: Vlaanderen, Brussel, Wallonië
- FOD-vergund, Wet private beveiliging 2017
- CEO Raf Monsieur genoemd
- E-mail: `info@monra-belgium.be`
- Telefoon/adres/KBO/BTW: placeholders *"wordt aangevuld"*
- Moederbedrijf: Monra Security BV Linne

### 19 jun 2026 — AI Chat + UI (door agent + bmassij)
| Commit | Beschrijving |
|--------|--------------|
| `8c2006a` | Unified AI chat op 3 sites, OpenRouter API |
| `6734ca7` | Chat styling per brand, Vercel timeout fix |

### Eerder jun 2026
- Events Security: logo, slider, gallery (`fd81a0a`)
- SubsiteNav + familie-banners (`ff28915`, `33261a8`)
- Vercel build fixes (`84afe3c`, `0e812f7`)
- Hero slider + gallery main page (`478f3d3`)
- MonraFamilie sectie, kleuren (`e91a2d7`, `0041ed1`)

---

## Lokaal toegevoegd (22 jun, nog niet gepusht)

- `monra-chat.ts`: 4e tak `belgium`, routing BE/Vlaanderen/FOD
- `MonraChat` op `/belgie`
- Groep quiz: optie "Beveiliging in België" → `/belgie`
- `docs/PROJECT_STATE.md` (dit bestand)

---

## AI Chat architectuur

```
Browser → MonraChat → POST /api/chat → OpenRouter (model rotatie)
                                    → monra-chat.ts (FAQ fallback)
```

**Bestanden:**
- `src/components/MonraChat.tsx`
- `src/components/ChatMessageBody.tsx`
- `src/lib/monra-chat.ts` — kennis 4 takken, routing, system prompt
- `src/lib/openrouter-models.ts` — round-robin + fallback bij 429
- `src/app/api/chat/route.ts`

**MonraSite type:** `'security' | 'support' | 'events' | 'belgium'`

---

## Environment variables

| Variable | Doel |
|----------|------|
| `OPENROUTER_API_KEY` | OpenRouter (verplicht voor AI) |
| `OPENROUTER_MODELS` | Comma-separated `:free` modellen |
| `NEXT_PUBLIC_SITE_URL` | Referer voor OpenRouter |
| `SITE_BRAND` | Default `security` |
| `RESEND_API_KEY` | Contactformulier (niet actief) |

**OpenRouter:** 50/dag gratis → 1000/dag na $10 credits (eenmalig). 1 key voor alle modellen.

---

## Contactgegevens (in code)

| Tak | E-mail |
|-----|--------|
| Monra Security NL | info@monra-security.nl |
| Monra Support | info@monra-support.nl |
| Events Security | info@monra-events-security.nl |
| Monra Belgium | info@monra-belgium.be |

**NL telefoon:** +31 (0)6 45398678 (directie), +31 (0)6 23624789 (planning)  
**Adres NL:** Schuttersstraat 7, 6067 GE Linne · KVK 89581806

---

## Navigatie / Familie-balk

Alle sites linken naar elkaar + `/groep`. Belgium 🇧🇪 staat in:
- `/` familie-banner
- Support & Events `FAMILIE_FROM_*` in `subsite-nav.ts`
- `/groep` 4e kaart + footer
- `/belgie` familie-banner (NL, Support, Groep)

---

## Afbeeldingen

- **Main:** `src/lib/images.ts` + `public/images/`
- **Events:** `src/lib/events-images.ts` — logo.jpg + 4 event foto's

---

## Bekende gaps / TODO

- [ ] Belgium telefoon, adres, KBO, BTW invullen op `/belgie`
- [ ] Push lokale chat+Belgium updates naar GitHub
- [ ] README.md / DEPLOY.md updaten (OpenRouter, `/belgie`, 4 takken)
- [ ] Contact API: Resend of Hostnet SMTP
- [ ] `.env.example` model-volgorde (snelle modellen eerst)

---

## Deploy checklist

1. Vercel Root Directory = `monra-website`
2. Env: `OPENROUTER_API_KEY`, `OPENROUTER_MODELS`
3. Deploy laatste commit + lokale wijzigingen
4. Chat header: *"AI assistent · Kent alle 4 Monra-takken"*

---

## Agent-regels

1. Vercel root = `monra-website`
2. Geen commits tenzij user vraagt
3. Geen API keys in git
4. Support page: geen event handlers in server components
5. Update dit bestand na significante wijzigingen
