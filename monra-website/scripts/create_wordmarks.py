"""Genereer horizontale wordmark-PNG's uit bronlogo's."""
from pathlib import Path
from PIL import Image

SRC = Path(__file__).resolve().parents[1] / "public" / "brand" / "originals"
OUT = Path(__file__).resolve().parents[1] / "public" / "brand"
OUT.mkdir(parents=True, exist_ok=True)


def key_bg(im: Image.Image, mode: str) -> Image.Image:
    im = im.convert("RGBA")
    px = im.load()
    w, h = im.size
    for y in range(h):
        for x in range(w):
            r, g, b, a = px[x, y]
            if mode == "black" and r < 45 and g < 45 and b < 45:
                px[x, y] = (0, 0, 0, 0)
            elif mode == "white" and r > 235 and g > 235 and b > 235:
                px[x, y] = (0, 0, 0, 0)
    return im


def export(src_name: str, out_name: str, bg: str | None = None) -> None:
    src = SRC / src_name
    if not src.exists():
        print(f"SKIP missing: {src}")
        return
    im = Image.open(src)
    if bg:
        im = key_bg(im, bg)
    w, h = im.size
    if w < 1600:
        nh = int(h * 1600 / w)
        im = im.resize((1600, nh), Image.LANCZOS)
    dest = OUT / out_name
    im.save(dest, "PNG")
    print(f"OK {dest} {im.size}")


if __name__ == "__main__":
    export("WhatsApp Image 2026-06-19 at 11.02.28 (1).jpeg", "events-security-wordmark.png", "white")
    export("WhatsApp Image 2026-06-19 at 11.02.28.jpeg", "support-wordmark.png", "black")
    print("done")
