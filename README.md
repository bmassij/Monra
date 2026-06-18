# Monra — GitHub + Vercel

Next.js website voor [Monra Security](https://github.com/bmassij/Monra).

## Structuur

```
monra-website/          ← Next.js app (Vercel root directory)
monra-website-preview.html
monra-support.html
```

## Deploy op Vercel (via GitHub)

1. Ga naar [vercel.com/new](https://vercel.com/new)
2. Importeer repo **bmassij/Monra**
3. **Belangrijk:** zet **Root Directory** op `monra-website` (klik Edit naast root)
4. Framework: Next.js (automatisch gedetecteerd)
5. Klik **Deploy**

### Environment variabelen (optioneel)

In Vercel → Project → Settings → Environment Variables:

| Variable | Waarde | Doel |
|----------|--------|------|
| `SITE_BRAND` | `security` | Multi-site branding |
| `RESEND_API_KEY` | `re_...` | Contactformulier e-mail |

Zie `monra-website/.env.example` voor lokale ontwikkeling.

## Lokaal draaien

```bash
cd monra-website
npm install
npm run dev
```

Meer details: `monra-website/DEPLOY.md`
