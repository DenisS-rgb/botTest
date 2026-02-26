# 🚀 MIDDLEOUT - Professional Web Development Portfolio

Modern, responsive website built with **Next.js 15**, **TypeScript**, and **Tailwind CSS**.

![Next.js](https://img.shields.io/badge/Next.js-15-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-38bdf8)
![License](https://img.shields.io/badge/License-MIT-green)

## ✨ Features

- ✅ **Pixel-perfect design** - Fully implemented from Figma
- ✅ **Fully responsive** - Mobile, tablet, desktop optimized
- ✅ **Modern tech stack** - Next.js 15, TypeScript, Tailwind CSS
- ✅ **SEO optimized** - Meta tags, semantic HTML, structured data
- ✅ **Fast performance** - Optimized bundles, lazy loading
- ✅ **Clean architecture** - Modular components, maintainable code
- ✅ **Smooth animations** - CSS transitions, hover effects
- ✅ **Type-safe** - Full TypeScript coverage

## 📸 Preview

Visit the live site: [Coming Soon]

### Desktop
[Screenshot coming soon]

### Mobile
[Screenshot coming soon]

## 🚀 Quick Start

```bash
# Clone repository
git clone https://github.com/yourusername/middelout.git

# Install dependencies
cd middelout
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
middelout/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   └── globals.css        # Global styles
├── components/
│   ├── layout/            # Header, Footer
│   ├── sections/          # Page sections
│   └── ui/                # Reusable UI components
├── lib/                   # Utilities
├── public/                # Static assets
└── [docs]                 # Documentation files
```

## 🎨 Tech Stack

### Core
- **Framework:** [Next.js 15](https://nextjs.org/) (App Router)
- **Language:** [TypeScript 5](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS 4](https://tailwindcss.com/)

### Tools
- **Package Manager:** npm
- **Linting:** ESLint
- **Fonts:** Inter (Google Fonts)

### Dependencies
- `clsx` - Conditional classnames
- `tailwind-merge` - Merge Tailwind classes

**Total:** 15 packages (lightweight!)

## 📦 Available Scripts

```bash
npm run dev      # Development server
npm run build    # Production build
npm start        # Start production server
npm run lint     # Run ESLint
```

See [COMMANDS.md](./COMMANDS.md) for more useful commands.

## 🌐 Deployment

### Deploy to Vercel (Recommended)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/middelout)

```bash
npm install -g vercel
vercel
```

### Other Options
- **Netlify:** `netlify deploy --prod`
- **Docker:** See [DEPLOYMENT.md](./DEPLOYMENT.md)
- **VPS:** Node.js + PM2 + Nginx

Full deployment guide: [DEPLOYMENT.md](./DEPLOYMENT.md)

## 📝 Documentation

- 📖 [Project Summary](./PROJECT_SUMMARY.md) - Complete overview
- ⚡ [Quick Start Guide](./QUICK_START.md) - Get up and running
- 🚀 [Deployment Guide](./DEPLOYMENT.md) - Deploy to production
- 📁 [Structure Overview](./STRUCTURE.md) - Architecture details
- 🔧 [Useful Commands](./COMMANDS.md) - CLI reference

## 🎯 Sections

1. **Hero** - Main headline with CTAs
2. **About** - Company info with stats
3. **Services** - 3 main services
4. **Portfolio** - Project showcase
5. **Contact** - Contact form with info
6. **Footer** - Links and social media

## 🛠️ Customization

### Update Content
Each section has its own component in `components/sections/`:
- Hero text → `Hero.tsx`
- Services → `Services.tsx`
- Portfolio → `Portfolio.tsx`
- Contact info → `Contact.tsx`

### Change Colors
Edit `tailwind.config.ts`:
```typescript
colors: {
  primary: {
    DEFAULT: "#0066FF", // Your brand color
  },
}
```

### Add New Section
1. Create component in `components/sections/`
2. Import in `app/page.tsx`
3. Add navigation link in `Header.tsx`

## 📱 Responsive Design

Tested and optimized for:
- 📱 Mobile (320px - 767px)
- 📱 Tablet (768px - 1023px)
- 💻 Desktop (1024px+)

Breakpoints: `sm:768px`, `md:1024px`, `lg:1280px`

## ⚡ Performance

- ✅ **Fast load times** - Optimized bundles
- ✅ **Lazy loading** - Images and components
- ✅ **Code splitting** - Automatic (Next.js)
- ✅ **SEO ready** - Meta tags, sitemap

Test with Lighthouse for scores 90+

## 🤝 Contributing

Contributions welcome! Please:
1. Fork the repository
2. Create feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Open Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Team

**MIDDLEOUT** - Web Development Agency

- Website: [middleout.com](https://middleout.com)
- Email: office@middleout.com
- Phone: +40 729 818 463

## 🙏 Acknowledgments

- Design: [Figma Design](https://figma.com/design/bAjBk1wbTz96VgbzbIQ4RH/MIDDELOUT)
- Built with: [Next.js](https://nextjs.org/), [Tailwind CSS](https://tailwindcss.com/)
- Deployed on: [Vercel](https://vercel.com/)

## 📊 Project Status

- [x] Design implementation
- [x] Responsive layout
- [x] Component development
- [x] SEO optimization
- [ ] Add project images
- [ ] Connect contact form
- [ ] Deploy to production
- [ ] Add analytics

## 🐛 Known Issues

None currently. Report issues on [GitHub Issues](https://github.com/yourusername/middelout/issues).

## 📞 Support

Need help? Check the documentation or:
- 📧 Email: office@middleout.com
- 💬 Open an issue
- 📚 Read the [docs](./PROJECT_SUMMARY.md)

---

**Made with ❤️ by [Quant Apps](https://quantapps.com)**

**© 2025 MIDDLEOUT. All rights reserved.**

---

⭐ **Star this repo if you find it useful!**
