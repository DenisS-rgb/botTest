# MIDDLEOUT Website

Modern, responsive website built with Next.js 15, TypeScript, and Tailwind CSS.

## 🚀 Features

- ✅ Fully responsive design (mobile, tablet, desktop)
- ✅ Modern UI with smooth animations
- ✅ TypeScript for type safety
- ✅ Tailwind CSS for styling
- ✅ SEO optimized
- ✅ Fast performance with Next.js App Router
- ✅ Reusable component architecture

## 📁 Project Structure

```
middelout/
├── app/
│   ├── layout.tsx          # Root layout with fonts & metadata
│   ├── page.tsx            # Home page
│   └── globals.css         # Global styles
├── components/
│   ├── layout/
│   │   ├── Header.tsx      # Navigation header
│   │   └── Footer.tsx      # Footer with links & social
│   └── sections/
│       ├── Hero.tsx        # Hero section
│       ├── About.tsx       # About section with stats
│       ├── Services.tsx    # Services cards
│       ├── Portfolio.tsx   # Projects showcase
│       └── Contact.tsx     # Contact form
└── public/
    └── images/             # Place project images here
```

## 🎨 Design System

### Colors
- **Primary**: `#0066FF` (Blue)
- **Background**: White
- **Text**: Black/Gray scale
- **Accent**: Blue gradient for contact section

### Typography
- **Font**: Inter (Google Fonts)
- **Headings**: Bold, 48-72px
- **Body**: Regular, 16-20px

### Components
- Rounded buttons with hover effects
- Card layouts with borders
- Smooth transitions and animations
- Decorative star elements

## 🛠️ Development

### Install dependencies
```bash
npm install
```

### Run development server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Build for production
```bash
npm run build
npm start
```

## 📝 Customization

### Adding Project Images
1. Place images in `public/images/`
2. Update image paths in `components/sections/Portfolio.tsx`

### Updating Content
- **Navigation**: Edit `components/layout/Header.tsx` and `Footer.tsx`
- **Hero Text**: Edit `components/sections/Hero.tsx`
- **Services**: Edit `components/sections/Services.tsx`
- **Contact Info**: Edit `components/sections/Contact.tsx`

### Colors & Styling
- Main colors: `tailwind.config.ts`
- Global styles: `app/globals.css`

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🚀 Deployment

### Vercel (Recommended)
```bash
vercel deploy
```

### Other Platforms
Build the project and deploy the `.next` folder:
```bash
npm run build
```

## 📧 Contact Form Integration

The contact form is ready to integrate with:
- Email services (SendGrid, Mailgun, Resend)
- Form handlers (Formspree, Getform)
- Backend APIs

Update the `handleSubmit` function in `components/sections/Contact.tsx`.

## ✨ Future Enhancements

- [ ] Add animations (Framer Motion)
- [ ] Blog section
- [ ] Case studies for projects
- [ ] Multi-language support (i18n)
- [ ] Dark mode toggle
- [ ] Analytics integration

## 📄 License

Created for MIDDLEOUT by Quant Apps © 2025
