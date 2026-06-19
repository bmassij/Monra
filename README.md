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

## Vercel deploy lukt niet?

De build-fix staat al op GitHub (commit `a84066a`). Je hoeft lokaal niets te pushen.

1. Ga naar **vercel.com** → jouw project → **Deployments**
2. Kijk bij de bovenste deploy welke **commit** staat — moet `a84066a` of nieuwer zijn
3. Staat er een **oude** commit? Klik **Create Deployment** → branch `main` → **Deploy**
   - **Niet** "Redeploy" op een oude mislukte deploy — dat bouwt dezelfde kapotte code opnieuw
4. Controleer **Settings → General → Root Directory** = `monra-website`

Build slaagt lokaal met alle routes: `/`, `/support`, `/events-security`, `/groep`.
