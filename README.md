# NexusAI Agency — Next.js Website

A professional AI & WordPress agency website built with **Next.js 14**, **TypeScript**, and **Tailwind CSS**.

## 🚀 Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Development Server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Build for Production
```bash
npm run build
npm start
```

---

## 📁 Project Structure

```
src/
├── app/
│   ├── layout.tsx       # Root layout with fonts & metadata
│   ├── page.tsx         # Main page (imports all sections)
│   └── globals.css      # Global styles & animations
├── components/
│   ├── Cursor.tsx       # Custom animated cursor
│   ├── Navbar.tsx       # Sticky navigation
│   ├── Hero.tsx         # Hero section with stats
│   ├── Marquee.tsx      # Scrolling ticker
│   ├── Services.tsx     # 4 service cards
│   ├── Process.tsx      # 4-step process
│   ├── WhyUs.tsx        # Features + metrics card
│   ├── Tools.tsx        # Tech stack chips
│   ├── Pricing.tsx      # 3 pricing plans
│   ├── Testimonials.tsx # Client reviews
│   ├── CTA.tsx          # Call to action
│   └── Footer.tsx       # Footer with links
└── hooks/
    └── useScrollReveal.ts  # Intersection Observer hook
```

---

## ✏️ Customization

### Change Agency Name
Replace `NexusAI` in `Navbar.tsx`, `Footer.tsx`, and `layout.tsx`.

### Update Contact Info
- Edit email in `CTA.tsx`
- Update WhatsApp link in `CTA.tsx`
- Update social links in `Footer.tsx`

### Change Pricing
Edit the `plans` array in `Pricing.tsx`.

### Update Services
Edit the `services` array in `Services.tsx`.

---

## 🎨 Design

- **Theme**: Dark minimal (deep green + black)
- **Fonts**: Syne (headings), DM Sans (body), Space Mono (labels)
- **Animations**: CSS scroll reveal, marquee ticker, floating badge, custom cursor

---

## 🛠 Tech Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Google Fonts** (Syne, DM Sans, Space Mono)
