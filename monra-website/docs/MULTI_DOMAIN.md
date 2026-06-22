# Multi-domain configuratie

De Monra-website draait als één Next.js-app met meerdere tak-routes. Productie kan per tak een eigen domein gebruiken.

## Domein → route

| Domein | Interne route |
|--------|----------------|
| `monra-security.nl` | `/` |
| `monra-support.nl` | `/support` |
| `monra-events-security.nl` | `/events-security` |
| `monra-belgium.be` | `/belgie` |
| `don-keijsjot.nl` / `donkiesjot.nl` | `/don-keijsjot` |

Mapping staat in `src/lib/domains.ts`. Middleware (`src/middleware.ts`) herschrijft verkeer op tak-domeinen naar het juiste pad.

## Externe links in de familie-balk

Zet in `.env.local` (of Vercel environment):

```env
NEXT_PUBLIC_USE_EXTERNAL_DOMAINS=true
```

- **`false` of niet gezet (standaard):** interne paden (`/support`, `/belgie`, …) — handig voor lokaal dev.
- **`true`:** familie-pills en subsite-nav gebruiken volledige domein-URL's.

## DNS & hosting

1. Alle domeinen wijzen naar dezelfde Vercel/hosting-deployment.
2. Voeg elk domein toe als custom domain in Vercel.
3. Middleware zorgt dat `monra-support.nl/` de support-pagina toont zonder `/support` in de URL.

## Lokaal testen

Hosts-file entries (optioneel):

```
127.0.0.1 monra-support.local
```

Middleware werkt op hostname; lokaal blijft `localhost:3000/support` de normale dev-URL.

## Nieuwe tak toevoegen

1. Route toevoegen in `TAK_ROUTES` en `DOMAIN_TO_TAK`.
2. Pagina onder `src/app/…`.
3. Familie-links bijwerken in `src/lib/subsite-nav.ts`.
4. DNS + Vercel custom domain configureren.
