# 📁 Project Structure Overview

## File Tree

```
middelout/
│
├── 📄 Documentation Files
│   ├── QUICK_START.md          # ⚡ Start here! Quick launch guide
│   ├── PROJECT_SUMMARY.md      # 📋 Complete project overview
│   ├── DEPLOYMENT.md           # 🚀 Deployment instructions
│   ├── README.project.md       # 📖 Technical documentation
│   └── STRUCTURE.md            # 📁 This file
│
├── 📱 App (Next.js App Router)
│   ├── layout.tsx              # Root layout, fonts, SEO metadata
│   ├── page.tsx                # Home page (assembles all sections)
│   └── globals.css             # Global styles & Tailwind config
│
├── 🧩 Components
│   │
│   ├── layout/
│   │   ├── Header.tsx          # Top navigation + mobile menu
│   │   └── Footer.tsx          # Footer with links & social icons
│   │
│   ├── sections/
│   │   ├── Hero.tsx            # Main hero section with CTA
│   │   ├── About.tsx           # About company + stats + features
│   │   ├── Services.tsx        # 3 service cards
│   │   ├── Portfolio.tsx       # Projects grid
│   │   └── Contact.tsx         # Contact form + blue gradient
│   │
│   └── ui/
│       ├── Button.tsx          # Reusable button component
│       └── SmoothScroll.tsx    # Smooth scroll behavior
│
├── 🛠️ Utilities
│   └── lib/
│       └── utils.ts            # Helper functions (cn for classnames)
│
├── 🎨 Styling
│   └── tailwind.config.ts      # Tailwind configuration, colors
│
└── 📦 Public Assets
    └── public/
        └── images/             # Project images go here
            ├── robill-preview.jpg      (add this)
            └── staiinfata-preview.jpg   (add this)
```

## Component Details

### 🏠 App Layer

#### `app/layout.tsx`
- Root HTML structure
- Inter font configuration
- SEO metadata (title, description, Open Graph)
- Smooth scroll setup

#### `app/page.tsx`
- Main entry point
- Assembles all sections in order
- Clean, simple structure

#### `app/globals.css`
- Tailwind base/components/utilities
- CSS custom properties (colors)
- Global resets

---

### 🧱 Layout Components

#### `components/layout/Header.tsx`
**Features:**
- Fixed position header
- Desktop navigation menu
- Mobile hamburger menu
- CTA button "Contactează-ne"
- Smooth backdrop blur
- Responsive breakpoints

**Props:** None (static navigation)

#### `components/layout/Footer.tsx`
**Features:**
- 4-column grid layout
- Navigation links
- Contact information
- Social media icons (LinkedIn, Facebook, Twitter)
- Copyright notice
- Responsive design

**Props:** None (static content)

---

### 📄 Section Components

#### `components/sections/Hero.tsx`
**Purpose:** Main hero section with headline and CTAs

**Features:**
- Large headline text
- Descriptive subtext
- 2 CTA buttons (primary + secondary)
- Decorative animated stars
- Fully responsive typography

**Props:** None (static content)

#### `components/sections/About.tsx`
**Purpose:** Company info, stats, and value propositions

**Features:**
- "Despre MIDDLEOUT" heading with decorative line
- Company description
- "Web, without the Excuses." tagline
- 3 stat cards (15+ years, 300+ clients, 10+ specialists)
- 3 feature cards with icons
- 2-column layout (content + features)

**Props:** None (static arrays for stats/features)

#### `components/sections/Services.tsx`
**Purpose:** Display 3 main services

**Features:**
- Section heading with decorative star
- 3 service cards:
  1. Dezvoltare Aplicații Web La Cheie
  2. Hosting & Infrastructură
  3. Consultanță IT & Machine Learning
- Icon SVGs for each service
- Hover effects (border color change)
- Responsive grid

**Props:** None (static services array)

#### `components/sections/Portfolio.tsx`
**Purpose:** Showcase company projects

**Features:**
- "Proiectele noastre" heading
- 2 project cards (Robill, Staiinfata)
- Image placeholders (waiting for real images)
- Hover effects
- Responsive 2-column grid

**Props:** None (static projects array)

**TODO:** Add actual project images to `public/images/`

#### `components/sections/Contact.tsx`
**Purpose:** Contact form with gradient background

**Features:**
- Blue gradient background with decorative stars
- Browser-window styled form
- 5 form fields: Name, Email, Service (dropdown), Budget, Message
- Contact info display (phone, email)
- Character illustration (SVG)
- Form validation (HTML5 required)
- 2-column layout (form + info)

**Props:** None (manages own state)

**TODO:** Connect form submission to backend/API

---

### 🎨 UI Components

#### `components/ui/Button.tsx`
**Purpose:** Reusable button with variants

**Features:**
- 3 variants: primary (black), secondary (blue), outline
- 3 sizes: sm, md, lg
- Hover scale effect
- TypeScript types

**Props:**
```typescript
variant?: "primary" | "secondary" | "outline"
size?: "sm" | "md" | "lg"
children: ReactNode
...standard button props
```

#### `components/ui/SmoothScroll.tsx`
**Purpose:** Enable smooth scrolling for anchor links

**Features:**
- Intercepts clicks on `#` links
- Smooth scroll behavior
- Zero UI (utility component)

**Props:** None

---

### 🛠️ Utilities

#### `lib/utils.ts`
**Purpose:** Helper functions

**Functions:**
- `cn()` - Combines class names using clsx + tailwind-merge
  - Handles conditional classes
  - Resolves Tailwind conflicts

---

### 🎨 Configuration

#### `tailwind.config.ts`
**Purpose:** Tailwind CSS configuration

**Customizations:**
- Primary color: `#0066FF`
- Inter font family variable
- Extended color palette
- Content paths for purging

---

## Data Flow

```
User visits site
    ↓
app/page.tsx loads
    ↓
layout.tsx provides structure (Header, Footer)
    ↓
Sections render in order:
    1. Hero
    2. About
    3. Services
    4. Portfolio
    5. Contact
    ↓
User interacts:
    - Clicks nav link → SmoothScroll → Scrolls to section
    - Opens mobile menu → Header state changes
    - Submits form → Contact component handles (needs backend)
```

## Styling Approach

### Tailwind Utility Classes
- Most styling via Tailwind utilities
- Consistent spacing scale
- Responsive prefixes (`md:`, `lg:`)
- Hover states (`hover:`)

### Component-Specific Styles
- Minimal custom CSS
- Everything in Tailwind or inline

### Color System
```css
--primary: #0066FF (Blue)
--background: White
--foreground: Black
--muted: Gray-100
```

## Responsive Breakpoints

```
Mobile:  < 768px   (sm)
Tablet:  768-1024  (md)
Desktop: > 1024px  (lg)
```

All components adapt:
- Stacked layouts on mobile
- Grid layouts on desktop
- Adjusted typography sizes
- Mobile menu on small screens

## Performance Optimizations

✅ **Built-in (Next.js):**
- Automatic code splitting
- Image optimization (Next/Image)
- Server-side rendering
- Tree shaking

✅ **Implemented:**
- Minimal dependencies
- No heavy animation libraries
- Pure CSS transitions
- Lazy loading (Next.js default)

## Future Enhancements

Suggested additions:
- [ ] Add Framer Motion for advanced animations
- [ ] Blog section (create `app/blog/page.tsx`)
- [ ] Case studies (expand Portfolio)
- [ ] Testimonials section
- [ ] Dark mode toggle
- [ ] Internationalization (i18n)
- [ ] Analytics integration

## Quick Edit Guide

### Change a color
→ `tailwind.config.ts` line 14

### Update hero text
→ `components/sections/Hero.tsx` line 18

### Add a service
→ `components/sections/Services.tsx` line 5 (services array)

### Modify footer links
→ `components/layout/Footer.tsx` line 4

### Change contact info
→ `components/sections/Contact.tsx` line 110

## Dependencies

### Production
- `next` - Framework
- `react` + `react-dom` - UI library
- `clsx` - Class name utility
- `tailwind-merge` - Tailwind class merging

### Development
- `typescript` - Type checking
- `tailwindcss` - Styling
- `eslint` - Code linting
- `@types/*` - TypeScript definitions

**Total:** 8 prod + 7 dev = 15 packages (lightweight!)

---

## Questions?

Check other docs:
- Need to deploy? → `DEPLOYMENT.md`
- Want overview? → `PROJECT_SUMMARY.md`
- Quick start? → `QUICK_START.md`

**Everything is organized, documented, and ready to go! 🚀**
