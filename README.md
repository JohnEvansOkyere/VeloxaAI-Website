# VeloxaAI Website

Modern, professional website for VeloxaAI showcasing VeloxaRecruit - our AI-powered recruitment platform.

## Design

Brand Colors:
- Turquoise Green (#14B8A6) - Primary brand color
- Professional Yellow/Amber (#F59E0B) - Accent color
- Off-White (#FAFAF9) - Background
- Dark Text (#292524) - Typography

Typography:
- Display Font: Outfit
- Body Font: Inter

## Features

- Responsive design for all devices
- Modern animations and transitions
- SEO optimized
- Professional gradient effects
- Smooth scrolling navigation
- Interactive CTA forms
- Brand-consistent color scheme
- Dark mode support

## Tech Stack

- Framework: Next.js 16 (App Router)
- Language: TypeScript
- Styling: Tailwind CSS 4
- Fonts: Google Fonts (Inter, Outfit)

## Getting Started

### Installation

```bash
cd /home/grejoy/Projects/veloxa-website
npm install
```

### Development

```bash
npm run dev
```

Open http://localhost:3000 in your browser.

### Build for Production

```bash
npm run build
npm start
```

## Pages & Sections

### Homepage

1. Navigation - Sticky header with smooth scroll links
2. Hero - Split layout with demo video and CTA buttons
3. Product - VeloxaRecruit overview with features
4. Features - 11 key platform capabilities (initially shows 6)
5. How It Works - Process visualization
6. Benefits - For employers and candidates
7. CTA - Social proof, testimonial, and demo form
8. Footer - Links, social media, company info

## Key Highlights

VeloxaRecruit is a production-ready AI recruitment platform:
- 60-80% faster hiring (from 42 days to 8-17 days)
- 50-70% cost reduction in recruitment expenses
- 40% improvement in candidate-job fit accuracy
- Zero unconscious bias through standardized AI assessment
- Multi-modal interviews (text and voice)
- 20+ CV screening criteria
- 17+ interview evaluation dimensions

## Project Structure

```
veloxa-website/
├── app/
│   ├── globals.css          # Global styles and Tailwind setup
│   ├── layout.tsx            # Root layout with metadata
│   └── page.tsx              # Homepage
├── components/
│   ├── Navigation.tsx        # Sticky navigation bar
│   ├── Hero.tsx             # Hero section with video
│   ├── Product.tsx          # Product showcase
│   ├── Features.tsx         # Features grid with show more
│   ├── HowItWorks.tsx       # Process steps
│   ├── Benefits.tsx         # Benefits section
│   ├── CTA.tsx              # Call-to-action with testimonial
│   └── Footer.tsx           # Footer with links
├── public/                  # Static assets
├── tailwind.config.ts       # Tailwind configuration
├── tsconfig.json            # TypeScript configuration
├── next.config.ts           # Next.js configuration
└── package.json             # Dependencies
```

## Customization

### Colors

Edit `tailwind.config.ts` to modify brand colors:

```typescript
colors: {
  primary: {
    turquoise: "#14B8A6",
    teal: "#0D9488",
    light: "#2DD4BF",
  },
  accent: {
    yellow: "#F59E0B",
    gold: "#D97706",
    light: "#FBBF24",
  },
  neutral: {
    offwhite: "#FAFAF9",
    light: "#F5F5F4",
    medium: "#E7E5E4",
    dark: "#292524",
  },
}
```

### Typography System

Consistent typography utilities are available in `globals.css`:

- `.heading-xl` - Extra large headings (4xl/5xl responsive)
- `.heading-lg` - Large headings (3xl/4xl responsive)
- `.heading-md` - Medium headings (2xl/3xl responsive)
- `.heading-sm` - Small headings (xl/2xl responsive)
- `.body-lg` - Large body text (lg/xl responsive)
- `.body-md` - Medium body text (base/lg responsive)
- `.body-sm` - Small body text (sm/base responsive)

Section utilities:
- `.section-padding` - Consistent section spacing
- `.section-header` - Standard section header layout
- `.section-title` - Section title styling
- `.section-description` - Section description styling

### Animations

Custom animations are defined in `tailwind.config.ts`:
- fade-in (0.4s)
- slide-up (0.4s)
- slide-down (0.4s)
- scale-in (0.3s)
- float (4s infinite)
- pulse (3s infinite)

## Deployment

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

## Contact

- Email: hello@veloxaai.com
- Phone: +1 (555) 123-4567
- Website: Coming Soon

## License

Copyright 2025 VeloxaAI. All rights reserved.

---

Built by the VeloxaAI Team
