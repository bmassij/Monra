# AGENTS.md

## Cursor Cloud specific instructions

This repo is a **Next.js website** for "Monra Security". The actual app lives in
`monra-website/` (the Vercel root directory). The root-level `*.html` files are
standalone static previews and are not part of the app build.

### Services / how to run

All commands run from `monra-website/` (see its `package.json` scripts):

- Install: `npm install` (npm + `package-lock.json`). Runs on the snapshot's Node 22
  even though `engines.node` says `20.x` — npm only warns, it does not block.
- Dev server: `npm run dev` (http://localhost:3000).
- Build / lint: `npm run build`, `npm run lint`. There is **no** test script.

The update script already runs `npm install` for this app on VM startup, so you only
need to start the dev server.

### Non-obvious notes

- All env vars in `monra-website/.env.example` are **optional**; the app starts and
  the homepage works without any of them.
- The homepage contact form (`src/app/page.tsx` → `Contact`) is **client-side only**:
  submitting just shows the "Bericht verzonden!" success state, no network call.
- `POST /api/contact` works **without** `RESEND_API_KEY` (it just logs and returns
  `{ success: true }`); email sending is commented out until a key is provided.
- `POST /api/chat` (the `MonraChat` widget) needs `OPENROUTER_API_KEY` to return real
  responses; without it the chat call will fail.
- `scripts/` contains Python logo-processing utilities — not part of dev setup.
