# 🧇 SD Waffles & Shakes

> **Where waffles get wild & shakes get thick!**

A premium 3D, mobile-first responsive landing page for **SD Waffles & Shakes** — a dessert shop in Miryalaguda, Telangana, India. Built with Next.js 16, Three.js, Framer Motion, and Tailwind CSS.

![SD Waffles & Shakes](public/images/hero-chocolate.png)

---

## ✨ Features

- **Interactive 3D Hero** — Live Three.js scene with floating chocolate spheres, gold torus, pink cubes & waffle cones, with the tagline centered and 3D objects framing the sides.
- **Full Interactive Menu** — 130+ items across 16 categories (Waffle Sandwiches, Premium Thick Shakes, Choco Shakes, Fruit Shakes, Mocktails, Waffle Sundae, Brownies, Ice Creams, Snacks, Burgers, Momos, Mini Pan Cakes, Hot Beverages, and more).
  - Horizontal scrollable category tabs
  - Live cross-category search
  - Veg / Non-veg markers, best-seller / chef / viral badges
  - Premium AI-generated food photography for every item
- **Special Highlights** — 3D tilt cards for the Triple Chocolate Waffle Sandwich (Best Seller) & Viral Strawberry Brownie Jar.
- **Cart & WhatsApp Ordering** — Add items to a persistent cart, then send the full order straight to WhatsApp. **No backend, no checkout — all orders route to WhatsApp.**
- **Visit Us** — Embedded Google Maps, two locations, tap-to-call, Instagram & WhatsApp links.
- **Premium Branding** — Custom AI-generated logo (PNG + JPEG) as navbar badge & favicon.
- **SEO Ready** — Full metadata, OpenGraph, Twitter cards, JSON-LD Restaurant schema, `sitemap.xml`, `robots.txt`, and web manifest.
- **Sticky Footer** — Pushes to bottom on short pages, respects safe-area on mobile.

---

## 🎨 Brand Palette

| Color | Hex | Usage |
|-------|-----|-------|
| Deep Chocolate Brown | `#3D2314` / `#2A1609` | Backgrounds, text |
| Waffle Gold | `#F2C14E` | Primary accent, CTAs |
| Strawberry Pink | `#FF6B8B` | Secondary accent |
| Cream White | `#FAFAFA` | Light backgrounds |

---

## 🛠 Tech Stack

- **Framework:** Next.js 16 (App Router) + TypeScript 5
- **Styling:** Tailwind CSS 4 + shadcn/ui
- **3D:** Three.js via `@react-three/fiber` + `@react-three/drei`
- **Animation:** Framer Motion
- **State:** Zustand (client-side cart, persisted to localStorage)
- **Fonts:** Bricolage Grotesque (display) + Plus Jakarta Sans (body)
- **Icons:** Lucide React

---

## 🚀 Getting Started

```bash
# Install dependencies
bun install

# Run the dev server
bun run dev

# Build for production
bun run build

# Start production server
bun run start

# Lint
bun run lint
```

The app runs on `http://localhost:3000`.

---

## ☁️ Deploy to Vercel

This project is Vercel-ready — no backend or database required.

1. Push this repo to GitHub.
2. Import the repo at [vercel.com/new](https://vercel.com/new).
3. Vercel auto-detects Next.js — just click **Deploy**.
4. No environment variables are required (all data is static; orders go to WhatsApp).

---

## 📞 Business Info

- **Location:** Miryalaguda, Telangana, India
- **Address 1:** Below Venky's Salon, Behind Bagara Hotel, Sagar Road, Miryalaguda, Nalgonda, Telangana - 508207
- **Address 2:** Near Abhyas High School, Hotel Vaishnavi Road, Doctors Colony, Miryalaguda - 508207
- **Phone:** +91 7093258864 / +91 9989455263
- **Instagram:** [@sd_wafflesandshakes](https://www.instagram.com/sd_wafflesandshakes/)
- **Hours:** Open daily, 10:30 AM – 10:00 PM
- **Services:** Dine-in & Takeaway

---

## 📁 Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout + SEO metadata + JSON-LD
│   ├── page.tsx            # Main landing page
│   ├── globals.css         # Theme, animations, brand palette
│   ├── icon.png            # Favicon (auto-detected by Next.js)
│   ├── apple-icon.png      # Apple touch icon
│   ├── sitemap.ts          # → /sitemap.xml
│   ├── robots.ts           # → /robots.txt
│   └── manifest.ts         # → /manifest.webmanifest
├── components/
│   ├── navbar.tsx
│   ├── cart-drawer.tsx
│   ├── hero-scene.tsx      # Three.js 3D scene
│   └── sections/
│       ├── hero.tsx
│       ├── marquee.tsx
│       ├── highlights.tsx
│       ├── menu.tsx
│       ├── visit-us.tsx
│       └── footer.tsx
└── lib/
    ├── menu-data.ts        # Full menu dataset + categories
    ├── cart-store.ts       # Zustand cart (localStorage)
    └── utils.ts

public/
└── images/                 # AI-generated food photography + logo
```

---

© SD Waffles & Shakes. Crafted with ❤️ for sweet tooths in Miryalaguda.
