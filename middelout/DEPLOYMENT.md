# 🚀 Deployment Guide - MIDDLEOUT Website

## Pre-Deployment Checklist

### ✅ Content & Assets
- [ ] Add project images to `public/images/`
  - `robill-preview.jpg`
  - `staiinfata-preview.jpg`
- [ ] Add favicon to `public/` (favicon.ico, apple-touch-icon.png)
- [ ] Update contact information if needed
- [ ] Review all text content for accuracy

### ✅ Configuration
- [ ] Set up `.env.local` file (copy from `.env.example`)
- [ ] Configure contact form backend (see options below)
- [ ] Add Google Analytics ID (optional)
- [ ] Update site URL in metadata

### ✅ Testing
- [ ] Test all navigation links
- [ ] Test contact form submission
- [ ] Check responsive design on mobile/tablet/desktop
- [ ] Test smooth scrolling behavior
- [ ] Verify all sections load correctly
- [ ] Check console for errors

## Contact Form Setup Options

### Option 1: Formspree (Easiest)
1. Sign up at [formspree.io](https://formspree.io)
2. Create a new form
3. Get your form endpoint URL
4. Update `components/sections/Contact.tsx`:

```typescript
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  
  const response = await fetch("YOUR_FORMSPREE_ENDPOINT", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(formData),
  });
  
  if (response.ok) {
    alert("Mulțumim! Mesajul a fost trimis.");
    setFormData({ name: "", email: "", service: "", budget: "", message: "" });
  }
};
```

### Option 2: SendGrid API
1. Install SendGrid: `npm install @sendgrid/mail`
2. Create API route: `app/api/contact/route.ts`
3. Configure with your API key

### Option 3: Custom Backend
Connect to your existing backend API.

## Deployment Platforms

### 🔷 Vercel (Recommended)

**Why Vercel?**
- Built by Next.js creators
- Zero configuration
- Automatic HTTPS
- Global CDN
- Free tier available

**Deploy Steps:**
```bash
# Install Vercel CLI
npm install -g vercel

# Login
vercel login

# Deploy
vercel

# Production deployment
vercel --prod
```

Or use GitHub integration:
1. Push code to GitHub
2. Import repository in Vercel dashboard
3. Deploy automatically on every push

**Environment Variables:**
Add these in Vercel dashboard → Settings → Environment Variables

### 🔷 Netlify

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login
netlify login

# Deploy
netlify deploy

# Production
netlify deploy --prod
```

### 🔷 Custom VPS/Server

**Requirements:**
- Node.js 18+
- PM2 for process management

**Steps:**
```bash
# Build the project
npm run build

# Install PM2
npm install -g pm2

# Start with PM2
pm2 start npm --name "middelout" -- start

# Save PM2 configuration
pm2 save
pm2 startup
```

**Nginx Configuration:**
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

### 🔷 Docker

**Dockerfile:**
```dockerfile
FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm ci --only=production

COPY . .
RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]
```

**Build & Run:**
```bash
docker build -t middelout .
docker run -p 3000:3000 middelout
```

## Performance Optimization

### Images
- Convert to WebP format
- Use Next.js Image component (already implemented)
- Optimize file sizes (< 200KB per image)

### Code Splitting
Already handled by Next.js App Router.

### Analytics
Add Google Analytics in `app/layout.tsx`:
```typescript
import Script from 'next/script';

// Add in <body>
<Script
  src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
  strategy="afterInteractive"
/>
```

## Domain Setup

1. **Buy domain** (Namecheap, GoDaddy, etc.)
2. **Configure DNS:**
   - Vercel: Add A/CNAME records provided by Vercel
   - Custom server: Point A record to your server IP

3. **SSL Certificate:**
   - Vercel/Netlify: Automatic
   - Custom server: Use Let's Encrypt (Certbot)

## Monitoring

### Vercel Analytics
Enable in project settings (free tier includes basic analytics).

### Google Search Console
1. Verify ownership
2. Submit sitemap: `https://yourdomain.com/sitemap.xml`

### Uptime Monitoring
- UptimeRobot (free)
- Pingdom
- StatusCake

## Post-Deployment

- [ ] Verify site loads on production URL
- [ ] Test contact form in production
- [ ] Check mobile responsiveness
- [ ] Submit to Google Search Console
- [ ] Set up uptime monitoring
- [ ] Add to Google Analytics
- [ ] Share with team/client

## Troubleshooting

### Build Errors
```bash
# Clear cache
rm -rf .next
npm run build
```

### Port Already in Use
```bash
# Kill process on port 3000
lsof -ti:3000 | xargs kill -9
```

### Environment Variables Not Working
- Ensure `.env.local` is in root directory
- Restart dev server after changes
- Prefix with `NEXT_PUBLIC_` for client-side access

## Support

For issues or questions:
- Email: office@middleout.com
- Phone: +40 729 818 463

---

**Created by Quant Apps © 2025**
