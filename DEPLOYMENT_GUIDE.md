# VeloxaAI Website - Deployment Guide

## 🚀 Ready to Deploy

Your website is production-ready and can be deployed to various platforms.

---

## ☁️ Deployment Options

### **Option 1: Vercel (Recommended - Official Next.js Platform)**

Vercel is the fastest and easiest way to deploy Next.js applications.

#### Steps:
1. **Install Vercel CLI:**
   ```bash
   npm install -g vercel
   ```

2. **Navigate to project:**
   ```bash
   cd /home/grejoy/Projects/veloxa-website
   ```

3. **Deploy:**
   ```bash
   vercel
   ```

4. **Follow prompts:**
   - Link to existing project or create new
   - Configure project settings (defaults are fine)
   - Deploy!

5. **Your site will be live at:** `https://your-project.vercel.app`

#### Production Deploy:
```bash
vercel --prod
```

#### Features:
- ✅ Automatic HTTPS
- ✅ Global CDN
- ✅ Zero configuration
- ✅ Instant rollbacks
- ✅ Preview deployments for git branches
- ✅ Analytics included

---

### **Option 2: Netlify**

Great alternative with similar features to Vercel.

#### Steps:
1. **Install Netlify CLI:**
   ```bash
   npm install -g netlify-cli
   ```

2. **Build the project:**
   ```bash
   npm run build
   ```

3. **Deploy:**
   ```bash
   netlify deploy
   ```

4. **Production deploy:**
   ```bash
   netlify deploy --prod
   ```

#### Configuration:
Create `netlify.toml`:
```toml
[build]
  command = "npm run build"
  publish = ".next"

[[plugins]]
  package = "@netlify/plugin-nextjs"
```

---

### **Option 3: Custom Server (VPS, AWS, etc.)**

Deploy to your own server or cloud provider.

#### Steps:

1. **Build the application:**
   ```bash
   npm run build
   ```

2. **Copy files to server:**
   - Upload entire project directory
   - Or use git to clone on server

3. **Install dependencies on server:**
   ```bash
   npm install --production
   ```

4. **Set up environment variables** (if any)

5. **Start the application:**
   ```bash
   npm start
   ```

6. **Use PM2 for process management:**
   ```bash
   npm install -g pm2
   pm2 start npm --name "veloxa-website" -- start
   pm2 save
   pm2 startup
   ```

7. **Configure reverse proxy (Nginx):**
   ```nginx
   server {
       listen 80;
       server_name yourdomain.com;

       location / {
           proxy_pass http://localhost:3000;
           proxy_http_version 1.1;
           proxy_set_header Upgrade $http_upgrade;
           proxy_set_header Connection 'upgrade';
           proxy_set_header Host $host;
           proxy_cache_bypass $http_upgrade;
       }
   }
   ```

8. **Set up SSL with Let's Encrypt:**
   ```bash
   sudo certbot --nginx -d yourdomain.com
   ```

---

### **Option 4: Docker Deployment**

Containerize your application for deployment anywhere.

#### Create `Dockerfile`:
```dockerfile
FROM node:18-alpine AS base

# Dependencies
FROM base AS deps
WORKDIR /app
COPY package*.json ./
RUN npm ci

# Build
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

# Production
FROM base AS runner
WORKDIR /app

ENV NODE_ENV production

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT 3000

CMD ["node", "server.js"]
```

#### Create `.dockerignore`:
```
node_modules
.next
.git
.gitignore
README.md
```

#### Build and run:
```bash
docker build -t veloxa-website .
docker run -p 3000:3000 veloxa-website
```

---

## 🌐 Custom Domain Setup

### **For Vercel:**
1. Go to project settings in Vercel dashboard
2. Click "Domains"
3. Add your custom domain
4. Update DNS records:
   ```
   Type: A
   Name: @
   Value: 76.76.21.21

   Type: CNAME
   Name: www
   Value: cname.vercel-dns.com
   ```

### **For Netlify:**
1. Go to "Domain settings" in Netlify dashboard
2. Add custom domain
3. Update DNS:
   ```
   Type: A
   Name: @
   Value: [Netlify IP]

   Type: CNAME
   Name: www
   Value: [your-site].netlify.app
   ```

---

## 🔒 Environment Variables

If you add any environment variables later (API keys, etc.):

### **Vercel:**
```bash
vercel env add VARIABLE_NAME
```
Or via dashboard: Settings > Environment Variables

### **Netlify:**
```bash
netlify env:set VARIABLE_NAME value
```
Or via dashboard: Site settings > Build & deploy > Environment

### **.env.local (Development):**
```env
NEXT_PUBLIC_API_URL=https://api.veloxaai.com
# Add other variables as needed
```

---

## 📊 Performance Optimization

### **Already Included:**
- ✅ Next.js automatic code splitting
- ✅ Image optimization (if you add images)
- ✅ CSS minification
- ✅ JavaScript minification
- ✅ Static generation where possible

### **Additional Optimizations:**

1. **Enable Image Optimization:**
   When adding images, use Next.js `<Image>` component:
   ```tsx
   import Image from 'next/image'

   <Image src="/logo.svg" width={200} height={50} alt="VeloxaAI" />
   ```

2. **Add Compression:**
   Next.js includes gzip compression by default on Vercel.
   For custom servers, enable in `next.config.ts`:
   ```typescript
   const nextConfig = {
     compress: true,
   };
   ```

3. **Enable Analytics:**
   Vercel Analytics (recommended):
   ```bash
   npm install @vercel/analytics
   ```

   Add to `layout.tsx`:
   ```tsx
   import { Analytics } from '@vercel/analytics/react';

   // In layout
   <Analytics />
   ```

---

## 🧪 Pre-Deployment Checklist

- [x] Build succeeds locally (`npm run build`)
- [x] No TypeScript errors
- [x] No ESLint errors
- [x] All links work
- [x] Mobile responsive
- [x] Forms work (test CTA submission)
- [ ] Replace placeholder contact info with real info
- [ ] Add real company logo (if available)
- [ ] Update email addresses in Footer and CTA
- [ ] Add Google Analytics tracking ID (optional)
- [ ] Test on multiple browsers (Chrome, Firefox, Safari, Edge)
- [ ] Test on mobile devices
- [ ] Verify SEO metadata is correct
- [ ] Set up custom domain (optional)

---

## 🔍 Post-Deployment Testing

After deploying, verify:

1. **Homepage loads** correctly
2. **All sections render** properly
3. **Navigation works** (smooth scrolling)
4. **Mobile menu** opens/closes
5. **Form submission** works (CTA section)
6. **Hover effects** work on buttons/cards
7. **Animations** trigger correctly
8. **Fonts load** (Inter and Outfit)
9. **Colors match** brand guidelines
10. **Responsive design** works on all devices

---

## 📈 Monitoring & Analytics

### **Recommended Tools:**

1. **Vercel Analytics** (if using Vercel)
   - Free with Vercel deployment
   - Real-time performance metrics

2. **Google Analytics 4**
   - Free user behavior tracking
   - Add tracking code to `layout.tsx`

3. **Hotjar**
   - Heatmaps and session recordings
   - Understand user behavior

4. **Sentry**
   - Error tracking
   - Performance monitoring

---

## 🚨 Troubleshooting

### **Build fails on deployment:**
- Check Node.js version (18+)
- Verify all dependencies in `package.json`
- Review build logs for errors

### **Styles don't load:**
- Ensure Tailwind config is correct
- Check `globals.css` is imported in `layout.tsx`
- Clear browser cache

### **Navigation doesn't work:**
- Verify all `href="#section"` IDs exist
- Check JavaScript is enabled

### **Form doesn't submit:**
- Currently shows success message only
- Needs backend integration for real email sending

---

## 🎉 Success!

Once deployed, your VeloxaAI website will be live and accessible to the world!

**Default Deployment URLs:**
- **Vercel:** `https://veloxa-website.vercel.app`
- **Netlify:** `https://veloxa-website.netlify.app`

**With Custom Domain:**
- `https://veloxaai.com`
- `https://www.veloxaai.com`

---

## 📞 Need Help?

- **Next.js Docs:** https://nextjs.org/docs
- **Vercel Docs:** https://vercel.com/docs
- **Tailwind CSS Docs:** https://tailwindcss.com/docs

---

**Happy Deploying! 🚀**

Built for VeloxaAI
© 2025 VeloxaAI - All Rights Reserved
