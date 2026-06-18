# Monra Security — Deployment Guide

## Lokaal draaien

```bash
cd monra-website
npm install
cp .env.example .env.local   # optioneel
npm run dev
# → http://localhost:3000
```

## Deploy op Vercel (via GitHub)

De Next.js app staat in de submap `monra-website`. Vercel moet die map als root gebruiken.

1. Ga naar [vercel.com/new](https://vercel.com/new)
2. Koppel je GitHub-account en importeer **bmassij/Monra**
3. Klik **Edit** naast Root Directory en kies **`monra-website`**
4. Laat Framework op **Next.js** staan (automatisch)
5. Build Command: `npm run build` (standaard)
6. Klik **Deploy**

Elke push naar `main` triggert automatisch een nieuwe deploy.

## Environment variabelen (optioneel)

Voeg toe in Vercel dashboard → Settings → Environment Variables:

| Variable        | Waarde             | Doel                    |
|-----------------|--------------------|-------------------------|
| RESEND_API_KEY  | re_...             | E-mail contactformulier |
| SITE_BRAND      | security           | Multi-site configuratie |

Kopieer `.env.example` naar `.env.local` voor lokaal testen.

## Multi-site setup (3 domeinen)

Voor 3 aparte sites (Security, Support, Events):
- Maak 3 Vercel projecten van dezelfde GitHub repo
- Stel bij elk project Root Directory in op `monra-website`
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
├── next.config.mjs          — Next.js configuratie
├── vercel.json              — Security headers
├── .env.example             — Voorbeeld env vars
└── package.json             — Dependencies
```
