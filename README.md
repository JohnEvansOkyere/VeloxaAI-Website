# VeloxaAI Website

Modern, professional website for VeloxaAI showcasing VeloxaRecruit - our AI-powered recruitment platform.

## 🎨 Design

- **Brand Colors:**
  - Turquoise Green (#14B8A6) - Primary brand color
  - Professional Yellow/Amber (#F59E0B) - Accent color
  - Off-White (#FAFAF9) - Background
  - Dark Text (#292524) - Typography

- **Typography:**
  - Display Font: Outfit
  - Body Font: Inter

## 🚀 Features

- ✅ Responsive design for all devices
- ✅ Modern animations and transitions
- ✅ SEO optimized
- ✅ Professional gradient effects
- ✅ Smooth scrolling navigation
- ✅ Interactive CTA forms
- ✅ Brand-consistent color scheme

## 📦 Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS 4
- **Fonts:** Google Fonts (Inter, Outfit)

## 🛠️ Getting Started

### Installation

```bash
cd /home/grejoy/Projects/veloxa-website
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## 📄 Pages & Sections

### Homepage
1. **Navigation** - Sticky header with smooth scroll links
2. **Hero** - Eye-catching headline with gradient text and CTA
3. **Stats** - Key metrics (60-80% faster, 50-70% cost reduction)
4. **Product** - VeloxaRecruit overview with features
5. **Features** - 12 key platform capabilities
6. **How It Works** - 6-step process visualization
7. **Benefits** - For employers and candidates
8. **CTA** - Demo scheduling form
9. **Footer** - Links, social media, company info

## 🎯 Key Highlights

- **VeloxaRecruit** is a production-ready AI recruitment platform
- **60-80% faster hiring** (from 42 days to 8-17 days)
- **50-70% cost reduction** in recruitment expenses
- **40% improvement** in candidate-job fit accuracy
- **Zero unconscious bias** through standardized AI assessment
- **Multi-modal interviews** (text and voice)
- **20+ CV screening criteria**
- **17+ interview evaluation dimensions**

## 📁 Project Structure

```
veloxa-website/
├── app/
│   ├── globals.css          # Global styles and Tailwind setup
│   ├── layout.tsx            # Root layout with metadata
│   └── page.tsx              # Homepage
├── components/
│   ├── Navigation.tsx        # Sticky navigation bar
│   ├── Hero.tsx             # Hero section
│   ├── Stats.tsx            # Statistics section
│   ├── Product.tsx          # Product showcase
│   ├── Features.tsx         # Features grid
│   ├── HowItWorks.tsx       # Process steps
│   ├── Benefits.tsx         # Benefits for employers & candidates
│   ├── CTA.tsx              # Call-to-action form
│   └── Footer.tsx           # Footer with links
├── public/                  # Static assets
├── tailwind.config.ts       # Tailwind configuration
├── tsconfig.json            # TypeScript configuration
├── next.config.ts           # Next.js configuration
└── package.json             # Dependencies
```

## 🎨 Customization

### Colors
Edit `tailwind.config.ts` to modify brand colors:

```typescript
colors: {
  primary: {
    turquoise: "#14B8A6",  // Adjust as needed
    teal: "#0D9488",
  },
  accent: {
    yellow: "#F59E0B",
    gold: "#D97706",
  },
  // ... more colors
}
```

### Animations
Custom animations are defined in `tailwind.config.ts` and include:
- fade-in
- slide-up
- slide-down
- scale-in
- float
- pulse

## 🌐 Deployment

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Other Platforms
Build the static site and deploy to any hosting provider:
```bash
npm run build
```

## 📞 Contact

- **Email:** hello@veloxaai.com
- **Phone:** +1 (555) 123-4567
- **Website:** [Coming Soon]

## 📝 License

© 2025 VeloxaAI. All rights reserved.

---

Built with ❤️ by the VeloxaAI Team
