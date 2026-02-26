# 🔧 Useful Commands

## Development

```bash
# Start dev server
npm run dev

# Start on specific port
npm run dev -- -p 3000

# Clear cache and restart
rm -rf .next && npm run dev
```

## Building

```bash
# Create production build
npm run build

# Start production server
npm start

# Analyze bundle size (after build)
npx @next/bundle-analyzer
```

## Code Quality

```bash
# Run linter
npm run lint

# Fix linting issues
npm run lint -- --fix

# Type check
npx tsc --noEmit
```

## Testing (when added)

```bash
# Run tests
npm test

# Watch mode
npm test -- --watch

# Coverage
npm test -- --coverage
```

## Deployment

```bash
# Deploy to Vercel
vercel

# Production deployment
vercel --prod

# Deploy to Netlify
netlify deploy --prod
```

## Package Management

```bash
# Install dependencies
npm install

# Add new package
npm install package-name

# Add dev dependency
npm install -D package-name

# Update all packages
npm update

# Check for outdated packages
npm outdated

# Clean install
rm -rf node_modules package-lock.json && npm install
```

## Git Workflow

```bash
# Initialize repository (if not done)
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit"

# Add remote
git remote add origin https://github.com/username/middelout.git

# Push
git push -u origin main
```

## Useful Next.js Commands

```bash
# Generate sitemap
# (add package first: npm install next-sitemap)

# Check Next.js info
npx next info

# Telemetry status
npx next telemetry status

# Disable telemetry
npx next telemetry disable
```

## Project Maintenance

```bash
# View project structure (install tree first)
tree -I 'node_modules|.next' -L 3

# Count lines of code
find . -name '*.tsx' -o -name '*.ts' | xargs wc -l

# Search for TODO comments
grep -r "TODO" --include="*.ts" --include="*.tsx"

# Find large files
du -sh * | sort -h

# Clean build artifacts
rm -rf .next out
```

## Database (when added)

```bash
# Prisma example commands

# Generate Prisma client
npx prisma generate

# Create migration
npx prisma migrate dev --name init

# Open Prisma Studio
npx prisma studio

# Push schema to database
npx prisma db push
```

## Environment

```bash
# Copy env example
cp .env.example .env.local

# Load environment variables (in dev)
source .env.local

# Check env variables
env | grep NEXT_PUBLIC
```

## Performance

```bash
# Analyze bundle size
npm run build && npx @next/bundle-analyzer

# Check lighthouse score
npx lighthouse http://localhost:3000

# Profile build time
NEXT_TELEMETRY_DISABLED=1 npm run build
```

## Docker (when using containers)

```bash
# Build image
docker build -t middelout .

# Run container
docker run -p 3000:3000 middelout

# Stop container
docker stop $(docker ps -q --filter ancestor=middelout)
```

## VS Code

```bash
# Open in VS Code
code .

# Open specific file
code components/sections/Hero.tsx

# Compare files
code -d file1.tsx file2.tsx
```

## Quick Fixes

```bash
# Port already in use
lsof -ti:3000 | xargs kill -9

# Permission issues
sudo chown -R $(whoami) .

# Node version issues
nvm use 18

# Clear npm cache
npm cache clean --force
```

## Backup

```bash
# Create backup (exclude node_modules and .next)
tar -czf middelout-backup.tar.gz \
  --exclude='node_modules' \
  --exclude='.next' \
  --exclude='.git' \
  .

# Extract backup
tar -xzf middelout-backup.tar.gz
```

## One-Liners

```bash
# Count components
ls -1 components/**/*.tsx | wc -l

# List all imports
grep -rh "^import" --include="*.tsx" | sort | uniq

# Find unused dependencies
npx depcheck

# Check package size
npm run build && ls -lh .next

# Format all files (if prettier installed)
npx prettier --write "**/*.{ts,tsx,json,css,md}"
```

---

**Pro Tip:** Add these to your `.bashrc` or `.zshrc` as aliases! 🚀
