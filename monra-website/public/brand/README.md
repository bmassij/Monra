# Monra brand assets

Print-ready logo-export gegenereerd vanuit WhatsApp-bronbestanden.

## Bronmap

`D:\AI\monra groep\logo's`

## Beschikbare tools bij export

- Python + Pillow: ja
- OpenCV (auto-trace): ja
- Inkscape: niet gevonden op PATH
- ImageMagick (magick): niet gevonden op PATH
- potrace: niet gevonden op PATH
- rembg: niet bruikbaar (NumPy/Numba conflict)

## Ontbrekende takken

- **belgie** — geen bronbestand in map gevonden
- **don-keijsjot** — geen bronbestand in map gevonden

## Bronbestanden (inspectie)

| Bestand | Tak | Variant | Formaat | Afmeting | Alpha | Notities |
|---------|-----|---------|---------|----------|-------|----------|
| `WhatsApp Image 2026-06-19 at 11.02.19.jpeg` | events-security | shield | JPEG raster | 1254×1254 | nee (effen bg) | Rood schild, volledig logo Events Security |
| `WhatsApp Image 2026-06-19 at 11.02.28.jpeg` | support | shield | JPEG raster | 1024×1024 | nee (effen bg) | Groen schild, volledig logo Support |
| `WhatsApp Image 2026-06-19 at 11.02.28 (1).jpeg` | events-security | horizontal | JPEG raster | 800×266 | nee (effen bg) | Horizontaal rood op wit, JPEG-compressie zichtbaar |
| `WhatsApp Image 2026-06-19 at 11.02.28 (2).jpeg` | events-security | stacked | JPEG raster | 570×595 | nee (effen bg) | Embleem + MONRA + Events-Security tekst |
| `WhatsApp Image 2026-06-19 at 11.02.28 (3).jpeg` | groep | emblem | JPEG raster | 1024×1024 | nee (effen bg) | Generiek Monra-embleem zonder taknaam — gebruikt als Groep |
| `WhatsApp Image 2026-06-19 at 11.02.29.jpeg` | security | shield | JPEG raster | 607×622 | nee (effen bg) | Cyaan schild, volledig logo Security |
| `WhatsApp Image 2026-06-19 at 11.02.38.jpeg` | security | horizontal | JPEG raster | 819×315 | nee (effen bg) | Horizontaal op cyaan achtergrond |
| `WhatsApp Image 2026-06-19 at 11.02.46.jpeg` | security | emblem | JPEG raster | 416×362 | nee (effen bg) | Cyaan embleem + MONRA, klein wit artefact in M |

## Primaire export per tak

### security

- **Bron:** `originals/WhatsApp Image 2026-06-19 at 11.02.29.jpeg`
- **Bronafmeting:** 607×622 px
- **Export PNG:** `security-logo.png` (2000×2265 px, transparant)
- **Export SVG:** `security-logo.svg` (embedded PNG, kleuren behouden)
- **Export EPS:** `security-logo.eps` (raster ingesloten)
- *Cyaan schild, volledig logo Security*
- *SVG bevat embedded PNG — kleuren behouden; handmatige vectorisatie nodig voor echte vector*
- *EPS bevat ingesloten raster (niet vector) — geschikt als fallback, niet voor grootformaat*

### support

- **Bron:** `originals/WhatsApp Image 2026-06-19 at 11.02.28.jpeg`
- **Bronafmeting:** 1024×1024 px
- **Export PNG:** `support-logo.png` (2000×2269 px, transparant)
- **Export SVG:** `support-logo.svg` (embedded PNG, kleuren behouden)
- **Export EPS:** `support-logo.eps` (raster ingesloten)
- *Groen schild, volledig logo Support*
- *SVG bevat embedded PNG — kleuren behouden; handmatige vectorisatie nodig voor echte vector*
- *EPS bevat ingesloten raster (niet vector) — geschikt als fallback, niet voor grootformaat*

### events-security

- **Bron:** `originals/WhatsApp Image 2026-06-19 at 11.02.19.jpeg`
- **Bronafmeting:** 1254×1254 px
- **Export PNG:** `events-security-logo.png` (2000×2273 px, transparant)
- **Export SVG:** `events-security-logo.svg` (embedded PNG, kleuren behouden)
- **Export EPS:** `events-security-logo.eps` (raster ingesloten)
- *Rood schild, volledig logo Events Security*
- *SVG bevat embedded PNG — kleuren behouden; handmatige vectorisatie nodig voor echte vector*
- *EPS bevat ingesloten raster (niet vector) — geschikt als fallback, niet voor grootformaat*

### groep

- **Bron:** `originals/WhatsApp Image 2026-06-19 at 11.02.28 (3).jpeg`
- **Bronafmeting:** 1024×1024 px
- **Export PNG:** `groep-logo.png` (2000×1819 px, transparant)
- **Export SVG:** `groep-logo.svg` (embedded PNG, kleuren behouden)
- **Export EPS:** `groep-logo.eps` (raster ingesloten)
- *Generiek Monra-embleem zonder taknaam — gebruikt als Groep*
- *SVG bevat embedded PNG — kleuren behouden; handmatige vectorisatie nodig voor echte vector*
- *EPS bevat ingesloten raster (niet vector) — geschikt als fallback, niet voor grootformaat*

## Aanbevelingen voor professioneel drukwerk

1. Vraag originele vectorbestanden (AI/EPS/SVG) op bij de ontwerper.
2. Huidige SVG/EPS zijn **geen echte vectoren** — SVG bevat PNG, EPS bevat raster.
3. Voor België en Don Keijsjot ontbreken logo's volledig in de bronmap.
4. Alternatieve varianten (horizontaal, embleem) staan in `originals/` — handmatig exporteren indien nodig.
