# WeSalute — Wounded Warrior Program

Next.js 16 App Router · TypeScript · Tailwind CSS v4 · Deployed on Vercel

## Route

`/wounded-warrior` — standalone page, no shared site chrome.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000/wounded-warrior](http://localhost:3000/wounded-warrior).

---

## Before you ship — TODO checklist

### 1. AkkuratLL font files (required before going live)

The page uses AkkuratLL (300/400/400i/700) via `@font-face` declarations in `app/globals.css`. The font files must be placed in `public/fonts/`:

```
public/fonts/
  AkkuratLL-Light.woff2
  AkkuratLL-Light.woff
  AkkuratLL-Regular.woff2
  AkkuratLL-Regular.woff
  AkkuratLL-Italic.woff2
  AkkuratLL-Italic.woff
  AkkuratLL-Bold.woff2
  AkkuratLL-Bold.woff
```

**Licensing reminder:** AkkuratLL is a commercial typeface by Lineto. Verify your web-font license covers the traffic volume of this page before deploying. The font will silently fall back to `system-ui` until the files are in place — visually close but not pixel-perfect.

### 2. Hero and section images

Placeholder `<img>` tags point to `/images/…`. Add the real photos to `public/images/`:

| File | Used in |
|---|---|
| `hero-veteran.jpg` | Hero section |
| `veteran-family.jpg` | BenefitTiles aside |
| `veteran-track.jpg` | Emotional image band |
| `america250-flag.jpg` | America 250 section background |
| `closing-bg.jpg` | Closing CTA section background |

### 3. Payment flow hookup

All CTA buttons have `data-payment="placeholder"` and `href="#"`. Wire them to your payment provider (Stripe, etc.) in `components/wounded-warrior/GiftTiers.tsx` and `ClosingCTA.tsx`. The gift-tier component already tracks the selected frequency (`once` / `monthly`) in React state — pass that through to checkout.

### 4. Live sponsorship feed

The ticker in `WaitlistRow.tsx` uses sample data. Before launch, replace the `FEED` array with a real anonymized stream (region + relative timestamp, no PII) from a Stripe/Supabase webhook. The `FUNDED` / `TOTAL` constants for the card-glyph row should also pull from a live count.

### 5. Placeholder stats

Three figures in `ProofSection.tsx` are marked `// PLACEHOLDER — confirm figure` before going live:
- Eligible wounded veterans count
- New disabled veterans per year
- Memberships gifted this year

### 6. America 250 lockup image

The `America250` section currently renders a text fallback. Add your actual lockup image at `public/images/a250-lockup.png` and swap the `<div>` fallback for an `<Image>` tag.

### 7. No env vars required at build time

The page is fully static (`○`) at build. No environment variables are needed until you wire in a payment provider.
