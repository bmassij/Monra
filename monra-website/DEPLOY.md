# Monra Security — Deployment Guide

## Lokaal draaien

```bash
cd monra-website
npm install
npm run dev
# → http://localhost:3000
```

## Deploy op Vercel (gratis)

1. Maak een account op vercel.com
2. Klik "Add New Project"
3. Upload deze map of koppel je GitHub repo
4. Vercel detecteert Next.js automatisch
5. Klik "Deploy" — klaar!

## Environment variabelen (optioneel)

Voeg toe in Vercel dashboard → Settings → Environment Variables:

| Variable        | Waarde             | Doel                    |
|-----------------|--------------------|-------------------------|
| RESEND_API_KEY  | re_...             | E-mail contactformulier |
| SITE_BRAND      | security           | Multi-site configuratie |

## Multi-site setup (3 domeinen)

Voor 3 aparte sites (Security, Support, Events):
- Maak 3 Vercel projecten van dezelfde codebase
- Stel SITE_BRAND in op: `security` / `support` / `events`
- Koppel elk project aan het eigen domein

## Bestanden

```
monra-website/
├── src/
│   └── app/
│       ├── layout.tsx       — HTML head, metadata
│       ├── page.tsx         — Volledige homepage
│       ├── globals.css      — Globale stijlen
│       └── api/contact/     — Contactformulier API
├── tailwind.config.ts       — Kleuren & animaties
├── next.config.ts           — Next.js configuratie
├── vercel.json              — Vercel deployment
└── package.json             — Dependencies
```
