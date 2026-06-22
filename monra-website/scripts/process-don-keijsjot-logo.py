"""Remove black background from Café Donkiesjot neon logo, export transparent PNG."""
from __future__ import annotations

import os
from pathlib import Path

import numpy as np
from PIL import Image

SRC = Path(
    r'C:\Users\styxi\.cursor\projects\c-Users-styxi-OneDrive-Documenten-Claude-Projects-monra-security\assets\c__Users_styxi_AppData_Roaming_Cursor_User_workspaceStorage_empty-window_images_image-8b278f4e-7b9d-4022-8963-4350a8cec077.png'
)
PUBLIC = Path(__file__).resolve().parent.parent / 'public'
OUT_PATHS = [
    PUBLIC / 'brand' / 'don-keijsjot-logo.png',
    PUBLIC / 'images' / 'don-keijsjot' / 'logo.png',
]


def main() -> None:
    im = Image.open(SRC).convert('RGBA')
    arr = np.array(im, dtype=np.float32)
    r, g, b = arr[:, :, 0], arr[:, :, 1], arr[:, :, 2]

    lum = 0.2126 * r + 0.7152 * g + 0.0722 * b
    max_c = np.maximum(np.maximum(r, g), b)
    sat = max_c - np.minimum(np.minimum(r, g), b)
    active = (lum > 12) | (max_c > 18) | (sat > 8)

    row_density = active.sum(axis=1)
    h, w = active.shape
    threshold = w * 0.08
    in_band = row_density > threshold

    best_start, best_end, cur_start = 0, h - 1, 0
    for i in range(h):
        if in_band[i] and (i == 0 or not in_band[i - 1]):
            cur_start = i
        if in_band[i] and (i == h - 1 or not in_band[i + 1]):
            if i - cur_start > best_end - best_start:
                best_start, best_end = cur_start, i

    sub = active[best_start : best_end + 1, :]
    ys, xs = np.where(sub)
    y0 = best_start + ys.min()
    y1 = best_start + ys.max()
    x0, x1 = xs.min(), xs.max()

    pad = 8
    x0 = max(0, x0 - pad)
    y0 = max(0, y0 - pad)
    x1 = min(w - 1, x1 + pad)
    y1 = min(h - 1, y1 + pad)

    cropped = im.crop((x0, y0, x1 + 1, y1 + 1))
    ca = np.array(cropped, dtype=np.float32)
    r, g, b = ca[:, :, 0], ca[:, :, 1], ca[:, :, 2]
    lum = 0.2126 * r + 0.7152 * g + 0.0722 * b
    max_c = np.maximum(np.maximum(r, g), b)

    black_thresh = 14
    glow_range = 55.0
    alpha_lum = np.clip((lum - black_thresh) / glow_range, 0, 1)
    alpha_max = np.clip((max_c - black_thresh) / glow_range, 0, 1)
    alpha = np.clip(np.maximum(alpha_lum, alpha_max) ** 0.85 * 1.15, 0, 1)

    out = np.zeros_like(ca, dtype=np.uint8)
    out[:, :, 0] = np.clip(r, 0, 255).astype(np.uint8)
    out[:, :, 1] = np.clip(g, 0, 255).astype(np.uint8)
    out[:, :, 2] = np.clip(b, 0, 255).astype(np.uint8)
    out[:, :, 3] = (alpha * 255).astype(np.uint8)

    result = Image.fromarray(out, 'RGBA')
    target_w = 1400
    scale = target_w / result.width
    target_h = int(result.height * scale)
    result = result.resize((target_w, target_h), Image.LANCZOS)

    for path in OUT_PATHS:
        path.parent.mkdir(parents=True, exist_ok=True)
        result.save(path, 'PNG', optimize=True)
        print(f'Saved {path} ({result.size})')


if __name__ == '__main__':
    main()
