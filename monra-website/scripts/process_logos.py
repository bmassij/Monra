#!/usr/bin/env python3
"""Process Monra logo sources into print-ready brand assets."""

from __future__ import annotations

import base64
import io
import json
import os
import re
import shutil
from dataclasses import dataclass, field
from pathlib import Path

from PIL import Image, ImageFilter, ImageOps

SOURCE_DIR = Path(r"D:\AI\monra groep\logo's")
OUT_DIR = Path(__file__).resolve().parents[1] / "public" / "brand"
ORIGINALS_DIR = OUT_DIR / "originals"
MIN_WIDTH = 2000

# Primary source per tak (best quality / most complete variant)
PRIMARY_SOURCES: dict[str, str] = {
    "security": "WhatsApp Image 2026-06-19 at 11.02.29.jpeg",
    "support": "WhatsApp Image 2026-06-19 at 11.02.28.jpeg",
    "events-security": "WhatsApp Image 2026-06-19 at 11.02.19.jpeg",
    "groep": "WhatsApp Image 2026-06-19 at 11.02.28 (3).jpeg",
}

# All files mapped to tak for reference in README
FILE_MAPPING: dict[str, dict] = {
    "WhatsApp Image 2026-06-19 at 11.02.19.jpeg": {
        "tak": "events-security",
        "variant": "shield",
        "bg": "black",
        "notes": "Rood schild, volledig logo Events Security",
    },
    "WhatsApp Image 2026-06-19 at 11.02.28.jpeg": {
        "tak": "support",
        "variant": "shield",
        "bg": "black",
        "notes": "Groen schild, volledig logo Support",
    },
    "WhatsApp Image 2026-06-19 at 11.02.28 (1).jpeg": {
        "tak": "events-security",
        "variant": "horizontal",
        "bg": "white",
        "notes": "Horizontaal rood op wit, JPEG-compressie zichtbaar",
    },
    "WhatsApp Image 2026-06-19 at 11.02.28 (2).jpeg": {
        "tak": "events-security",
        "variant": "stacked",
        "bg": "black",
        "notes": "Embleem + MONRA + Events-Security tekst",
    },
    "WhatsApp Image 2026-06-19 at 11.02.28 (3).jpeg": {
        "tak": "groep",
        "variant": "emblem",
        "bg": "black",
        "notes": "Generiek Monra-embleem zonder taknaam — gebruikt als Groep",
    },
    "WhatsApp Image 2026-06-19 at 11.02.29.jpeg": {
        "tak": "security",
        "variant": "shield",
        "bg": "black",
        "notes": "Cyaan schild, volledig logo Security",
    },
    "WhatsApp Image 2026-06-19 at 11.02.38.jpeg": {
        "tak": "security",
        "variant": "horizontal",
        "bg": "cyan",
        "notes": "Horizontaal op cyaan achtergrond",
    },
    "WhatsApp Image 2026-06-19 at 11.02.46.jpeg": {
        "tak": "security",
        "variant": "emblem",
        "bg": "black",
        "notes": "Cyaan embleem + MONRA, klein wit artefact in M",
    },
}

MISSING_TAKKEN = ["belgie", "don-keijsjot"]


@dataclass
class ProcessResult:
    tak: str
    source: str
    png_path: str | None = None
    svg_path: str | None = None
    eps_path: str | None = None
    source_dims: tuple[int, int] = (0, 0)
    output_dims: tuple[int, int] = (0, 0)
    notes: list[str] = field(default_factory=list)


def inspect_image(path: Path) -> dict:
    img = Image.open(path)
    w, h = img.size
    has_alpha = img.mode in ("RGBA", "LA") or (
        img.mode == "P" and "transparency" in img.info
    )
    return {
        "format": img.format,
        "mode": img.mode,
        "width": w,
        "height": h,
        "has_alpha": has_alpha,
        "size_bytes": path.stat().st_size,
        "vector": path.suffix.lower() in {".svg", ".eps", ".ai", ".pdf"},
    }


def remove_background(img: Image.Image, bg_type: str) -> Image.Image:
    img = img.convert("RGBA")
    px = img.load()
    w, h = img.size

    for y in range(h):
        for x in range(w):
            r, g, b, a = px[x, y]
            if bg_type == "black":
                # Remove near-black; keep colored logo pixels
                if r < 35 and g < 35 and b < 35:
                    px[x, y] = (r, g, b, 0)
            elif bg_type == "white":
                if r > 240 and g > 240 and b > 240:
                    px[x, y] = (r, g, b, 0)
            elif bg_type == "cyan":
                # Cyan background ~ #00AEEF / bright cyan
                if g > 180 and b > 180 and r < 120 and (b - r) > 80:
                    px[x, y] = (r, g, b, 0)
            else:
                raise ValueError(f"Unknown bg_type: {bg_type}")

    # Trim transparent borders
    bbox = img.getbbox()
    if bbox:
        img = img.crop(bbox)
    return img


def upscale_min_width(img: Image.Image, min_width: int = MIN_WIDTH) -> Image.Image:
    w, h = img.size
    if w >= min_width:
        return img
    scale = min_width / w
    new_size = (min_width, max(1, round(h * scale)))
    return img.resize(new_size, Image.Resampling.LANCZOS)


def alpha_to_bitmap(img: Image.Image, threshold: int = 128) -> Image.Image:
    """Binary bitmap for tracing: white = shape, black = background."""
    alpha = img.split()[-1]
    alpha = alpha.filter(ImageFilter.GaussianBlur(radius=0.5))
    return alpha.point(lambda p: 255 if p >= threshold else 0, mode="L")


def trace_bitmap_to_svg_paths(bitmap: Image.Image, simplify: float = 1.5) -> list[str]:
    """Trace bitmap contours to SVG path data using OpenCV if available."""
    try:
        import cv2
        import numpy as np
    except ImportError:
        return []

    arr = np.array(bitmap)
    contours, _hierarchy = cv2.findContours(arr, cv2.RETR_TREE, cv2.CHAIN_APPROX_SIMPLE)
    paths: list[str] = []

    for contour in contours:
        if cv2.contourArea(contour) < 50:
            continue
        approx = cv2.approxPolyDP(contour, simplify, True)
        if len(approx) < 3:
            continue
        pts = approx.reshape(-1, 2)
        d = f"M {pts[0][0]} {pts[0][1]}"
        for x, y in pts[1:]:
            d += f" L {x} {y}"
        d += " Z"
        paths.append(d)

    return paths


def create_svg_from_png(img: Image.Image, traced: bool) -> str:
    w, h = img.size
    if traced:
        bitmap = alpha_to_bitmap(img)
        paths = trace_bitmap_to_svg_paths(bitmap)
        if paths:
            path_els = "\n".join(
                f'  <path d="{p}" fill="#000000" fill-rule="evenodd"/>'
                for p in paths
            )
            return (
                f'<?xml version="1.0" encoding="UTF-8"?>\n'
                f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {w} {h}" '
                f'width="{w}" height="{h}">\n'
                f"  <!-- Auto-traced from raster; review for print -->\n"
                f"{path_els}\n"
                f"</svg>\n"
            )

    buf = io.BytesIO()
    img.save(buf, format="PNG")
    b64 = base64.b64encode(buf.getvalue()).decode("ascii")
    return (
        f'<?xml version="1.0" encoding="UTF-8"?>\n'
        f'<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" '
        f'viewBox="0 0 {w} {h}" width="{w}" height="{h}">\n'
        f"  <!-- Embedded raster; needs manual vectorization for true vector -->\n"
        f'  <image width="{w}" height="{h}" xlink:href="data:image/png;base64,{b64}"/>\n'
        f"</svg>\n"
    )


def create_eps_from_png(img: Image.Image, title: str) -> str:
    """Create EPS with embedded bitmap (DSC-compliant)."""
    w, h = img.size
    rgb = img.convert("RGB")
    buf = io.BytesIO()
    rgb.save(buf, format="TIFF")
    tiff_b64 = base64.b64encode(buf.getvalue()).decode("ascii")

    # PIL can write EPS directly — prefer that for reliability
    eps_buf = io.BytesIO()
    rgb.save(eps_buf, format="EPS")
    eps_data = eps_buf.getvalue().decode("latin-1", errors="replace")
    if len(eps_data) > 100:
        return eps_data

    # Fallback minimal EPS header
    return (
        f"%!PS-Adobe-3.0 EPSF-3.0\n"
        f"%%BoundingBox: 0 0 {w} {h}\n"
        f"%%Title: {title}\n"
        f"%%Creator: Monra brand export script\n"
        f"%%Note: Raster embedded EPS — not true vector paths\n"
        f"%%EndComments\n"
        f"gsave\n"
        f"0 0 translate\n"
        f"{w} {h} scale\n"
        f"grestore\n"
        f"showpage\n"
        f"%%EOF\n"
    )


def create_vector_eps_from_svg_paths(svg_content: str, title: str) -> str | None:
    """If SVG has path elements, emit a simple EPS with those paths."""
    paths = re.findall(r'd="([^"]+)"', svg_content)
    if not paths or "xlink:href" in svg_content:
        return None

    viewbox = re.search(r'viewBox="0 0 (\d+) (\d+)"', svg_content)
    if not viewbox:
        return None
    w, h = int(viewbox.group(1)), int(viewbox.group(2))

    eps_lines = [
        "%!PS-Adobe-3.0 EPSF-3.0",
        f"%%BoundingBox: 0 0 {w} {h}",
        f"%%Title: {title}",
        "%%Creator: Monra brand export (auto-trace)",
        "%%Note: Auto-traced vector — review before large-format print",
        "%%EndComments",
        "0 setgray",
    ]

    for path_d in paths:
        eps_lines.append(convert_svg_path_to_eps(path_d))

    eps_lines.extend(["showpage", "%%EOF"])
    return "\n".join(eps_lines) + "\n"


def convert_svg_path_to_eps(path_d: str) -> str:
    """Minimal SVG path M/L/Z to PostScript conversion."""
    tokens = re.findall(r"[MLZ]|[-+]?(?:\d*\.\d+|\d+)(?:[eE][-+]?\d+)?", path_d)
    ps = ["newpath"]
    i = 0
    cx, cy = 0.0, 0.0
    while i < len(tokens):
        cmd = tokens[i]
        if cmd == "M":
            cx, cy = float(tokens[i + 1]), float(tokens[i + 2])
            ps.append(f"{cx} {cy} moveto")
            i += 3
        elif cmd == "L":
            cx, cy = float(tokens[i + 1]), float(tokens[i + 2])
            ps.append(f"{cx} {cy} lineto")
            i += 3
        elif cmd == "Z":
            ps.append("closepath")
            ps.append("fill")
            i += 1
        else:
            i += 1
    return "\n".join(ps)


def process_tak(tak: str, source_name: str) -> ProcessResult:
    meta = FILE_MAPPING[source_name]
    source_path = SOURCE_DIR / source_name
    result = ProcessResult(tak=tak, source=source_name)

    info = inspect_image(source_path)
    result.source_dims = (info["width"], info["height"])
    result.notes.append(meta["notes"])

    img = Image.open(source_path)
    img = remove_background(img, meta["bg"])
    img = upscale_min_width(img)
    result.output_dims = img.size

    if result.output_dims[0] < MIN_WIDTH:
        result.notes.append(
            f"Bron smaller dan {MIN_WIDTH}px; upscaled van {result.source_dims[0]}px"
        )

    OUT_DIR.mkdir(parents=True, exist_ok=True)

    png_path = OUT_DIR / f"{tak}-logo.png"
    img.save(png_path, format="PNG", optimize=True)
    result.png_path = str(png_path.relative_to(OUT_DIR.parent.parent))

    # SVG: embed high-res PNG to preserve brand colors (no vector source available)
    svg_content = create_svg_from_png(img, traced=False)
    result.notes.append(
        "SVG bevat embedded PNG — kleuren behouden; handmatige vectorisatie nodig voor echte vector"
    )

    svg_path = OUT_DIR / f"{tak}-logo.svg"
    svg_path.write_text(svg_content, encoding="utf-8")
    result.svg_path = str(svg_path.relative_to(OUT_DIR.parent.parent))

    # EPS: raster embedded via Pillow (preserves colors; not true vector paths)
    eps_path = OUT_DIR / f"{tak}-logo.eps"
    bg = Image.new("RGB", img.size, (255, 255, 255))
    bg.paste(img.convert("RGB"), mask=img.split()[-1])
    bg.save(eps_path, format="EPS")
    result.notes.append(
        "EPS bevat ingesloten raster (niet vector) — geschikt als fallback, niet voor grootformaat"
    )

    result.eps_path = str(eps_path.relative_to(OUT_DIR.parent.parent))
    return result


def copy_originals() -> list[str]:
    ORIGINALS_DIR.mkdir(parents=True, exist_ok=True)
    copied = []
    for f in sorted(SOURCE_DIR.iterdir()):
        if f.is_file():
            dest = ORIGINALS_DIR / f.name
            shutil.copy2(f, dest)
            copied.append(f.name)
    return copied


def build_readme(inspections: dict, results: list[ProcessResult]) -> str:
    lines = [
        "# Monra brand assets",
        "",
        "Print-ready logo-export gegenereerd vanuit WhatsApp-bronbestanden.",
        "",
        "## Bronmap",
        "",
        f"`{SOURCE_DIR}`",
        "",
        "## Beschikbare tools bij export",
        "",
        "- Python + Pillow: ja",
        "- OpenCV (auto-trace): " + ("ja" if _has_opencv() else "nee"),
        "- Inkscape: niet gevonden op PATH",
        "- ImageMagick (magick): niet gevonden op PATH",
        "- potrace: niet gevonden op PATH",
        "- rembg: niet bruikbaar (NumPy/Numba conflict)",
        "",
        "## Ontbrekende takken",
        "",
    ]
    for tak in MISSING_TAKKEN:
        lines.append(f"- **{tak}** — geen bronbestand in map gevonden")

    lines.extend(["", "## Bronbestanden (inspectie)", ""])
    lines.append("| Bestand | Tak | Variant | Formaat | Afmeting | Alpha | Notities |")
    lines.append("|---------|-----|---------|---------|----------|-------|----------|")
    for fname, meta in FILE_MAPPING.items():
        insp = inspections[fname]
        lines.append(
            f"| `{fname}` | {meta['tak']} | {meta['variant']} | "
            f"{insp['format']} raster | {insp['width']}×{insp['height']} | "
            f"{'ja' if insp['has_alpha'] else 'nee (effen bg)'} | {meta['notes']} |"
        )

    lines.extend(["", "## Primaire export per tak", ""])
    for res in results:
        lines.append(f"### {res.tak}")
        lines.append("")
        lines.append(f"- **Bron:** `originals/{res.source}`")
        lines.append(f"- **Bronafmeting:** {res.source_dims[0]}×{res.source_dims[1]} px")
        lines.append(f"- **Export PNG:** `{Path(res.png_path).name}` ({res.output_dims[0]}×{res.output_dims[1]} px, transparant)")
        lines.append(f"- **Export SVG:** `{Path(res.svg_path).name}` (embedded PNG, kleuren behouden)")
        lines.append(f"- **Export EPS:** `{Path(res.eps_path).name}` (raster ingesloten)")
        for note in res.notes:
            lines.append(f"- *{note}*")
        lines.append("")

    lines.extend([
        "## Aanbevelingen voor professioneel drukwerk",
        "",
        "1. Vraag originele vectorbestanden (AI/EPS/SVG) op bij de ontwerper.",
        "2. Huidige SVG/EPS zijn **geen echte vectoren** — SVG bevat PNG, EPS bevat raster.",
        "3. Voor België en Don Keijsjot ontbreken logo's volledig in de bronmap.",
        "4. Alternatieve varianten (horizontaal, embleem) staan in `originals/` — "
        "handmatig exporteren indien nodig.",
        "",
    ])
    return "\n".join(lines)


def _has_opencv() -> bool:
    try:
        import cv2  # noqa: F401

        return True
    except ImportError:
        return False


def main() -> None:
    OUT_DIR.mkdir(parents=True, exist_ok=True)

    inspections = {fname: inspect_image(SOURCE_DIR / fname) for fname in FILE_MAPPING}

    copied = copy_originals()
    print(f"Copied {len(copied)} originals")

    results: list[ProcessResult] = []
    for tak, source in PRIMARY_SOURCES.items():
        print(f"Processing {tak} from {source}...")
        results.append(process_tak(tak, source))

    readme = build_readme(inspections, results)
    (OUT_DIR / "README.md").write_text(readme, encoding="utf-8")

    manifest = {
        "source_dir": str(SOURCE_DIR),
        "inspections": inspections,
        "results": [
            {
                "tak": r.tak,
                "source": r.source,
                "png": r.png_path,
                "svg": r.svg_path,
                "eps": r.eps_path,
                "source_dims": r.source_dims,
                "output_dims": r.output_dims,
                "notes": r.notes,
            }
            for r in results
        ],
        "missing_takken": MISSING_TAKKEN,
        "tools": {
            "python": True,
            "pillow": True,
            "opencv": _has_opencv(),
            "inkscape": False,
            "imagemagick": False,
            "potrace": False,
            "rembg": False,
        },
    }
    (OUT_DIR / "manifest.json").write_text(
        json.dumps(manifest, indent=2, ensure_ascii=False), encoding="utf-8"
    )
    print("Done.")


if __name__ == "__main__":
    main()
