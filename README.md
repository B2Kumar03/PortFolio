# Bittu Kumar — Portfolio

Personal portfolio built with Vite + React.

## Scripts

```bash
npm install
npm run dev
npm run build
npm run preview
npm run lint
npm run sync:portl
```

## Update personal content

Edit `src/data/portfolio.js` for email, LinkedIn, GitHub, résumé, domain and photo.

## Portl screenshots

Screenshots are synced from the public gallery:

```bash
npm run sync:portl
```

This downloads originals, writes optimized WebP + thumbnails to:

- `src/assets/projects/portl/{resident,guard,admin}`
- `public/projects/portl/{resident,guard,admin}`

And regenerates:

- `src/data/portlScreens.js`
- `src/data/portlHero.js`

## Featured work

1. Portl
2. AI Step Coach
3. Browser Extensions (QR Wave, Type Anywhere)

## Stack

React, Vite, GSAP, Lenis, React Router, Lucide, Sharp (dev sync only)
