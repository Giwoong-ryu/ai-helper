# CLAUDE.md - AI Helper Project Guide

## Project Overview

AI Helper is a Korean-language static website providing comprehensive guides for using AI tools including Claude, ChatGPT, Gemini, and Perplexity. The site compares features, pricing, strengths, and use cases of each AI platform.

**Author**: Giwoong Ryu ([@Giwoong-ryu](https://github.com/Giwoong-ryu))

## Repository Structure

```
ai-helper/
├── ai-helper-next/          # Next.js source code
│   ├── app/                  # App Router pages
│   │   ├── page.tsx          # Main landing page
│   │   ├── layout.tsx        # Root layout with metadata
│   │   ├── globals.css       # Global styles (Tailwind + CSS variables)
│   │   ├── claude/           # Claude guide page
│   │   ├── chatgpt/          # ChatGPT guide page (coming soon)
│   │   ├── gemini/           # Gemini guide page (coming soon)
│   │   └── perplexity/       # Perplexity guide page (coming soon)
│   ├── components/           # React components
│   │   ├── ui/               # ShadCN UI primitives
│   │   ├── coming-soon.tsx   # Placeholder for upcoming pages
│   │   └── comparison-table.tsx
│   ├── lib/
│   │   └── utils.ts          # cn() utility for Tailwind class merging
│   ├── public/               # Static assets
│   ├── package.json
│   ├── next.config.mjs       # Static export + GitHub Pages config
│   ├── tailwind.config.ts
│   └── tsconfig.json
├── index.html                # Built static output (root)
├── 404.html
├── _next/                    # Built Next.js static assets
├── claude/                   # Built Claude guide pages + extras
├── chatgpt/                  # Built ChatGPT pages
├── gemini/                   # Built Gemini pages
├── perplexity/               # Built Perplexity pages
├── backup_20251111_040403/   # Archived backup
└── .nojekyll                 # Disable Jekyll for GitHub Pages
```

## Tech Stack

- **Framework**: Next.js 15+ with App Router
- **Language**: TypeScript (strict mode)
- **React**: v19
- **Styling**: Tailwind CSS 3.4 with CSS variables
- **UI Components**: ShadCN UI (Radix UI primitives)
- **Icons**: Lucide React + custom inline SVGs
- **Deployment**: Static export to GitHub Pages

## Development Commands

All commands run from `ai-helper-next/` directory:

```bash
# Install dependencies
npm install

# Development server (localhost:3000)
npm run dev

# Production build (static export)
npm run build

# Lint code
npm run lint
```

## Key Configuration

### next.config.mjs
- `output: 'export'` - Static HTML generation
- `basePath: '/ai-helper'` - GitHub Pages subpath
- `assetPrefix: '/ai-helper'` - Asset URL prefix
- `trailingSlash: true` - URLs end with /
- `images.unoptimized: true` - Required for static export

### Path Aliases
- `@/*` maps to project root (configured in tsconfig.json)
- Example: `import { cn } from "@/lib/utils"`

## Code Conventions

### Component Structure
- Page components in `app/[route]/page.tsx`
- Metadata exports for SEO in page files
- ShadCN UI components in `components/ui/`
- Custom components in `components/`

### Styling
- Use Tailwind utility classes
- CSS variables for theming (defined in globals.css)
- Dark mode support via `.dark` class
- Use `cn()` helper for conditional class merging

### TypeScript
- Strict mode enabled
- Interface props for components (e.g., `ComingSoonProps`)
- Type imports from Next.js and React

## Page Content Status

| Page | Status | Features |
|------|--------|----------|
| Home (/) | Complete | AI tool cards, comparison table |
| Claude | Complete | 31 skillsets, 17 commands, 60 agents |
| ChatGPT | Coming Soon | Planned: prompt engineering, custom GPTs |
| Gemini | Coming Soon | Planned: multimodal, Google integration |
| Perplexity | Coming Soon | Planned: search workflows, citations |

## Build & Deployment Workflow

1. **Make changes** in `ai-helper-next/` source files
2. **Build**: `npm run build` (outputs to `ai-helper-next/out/`)
3. **Copy built files** to repository root for GitHub Pages
4. **Commit and push** to deploy

The static files at repository root (`index.html`, `_next/`, etc.) are the deployed site. The `ai-helper-next/` folder contains the source code.

## Common Tasks

### Adding a New Page
1. Create `app/[route]/page.tsx`
2. Export metadata for SEO
3. Use `ComingSoon` component or build full content
4. Build and copy output to root

### Adding UI Components
```bash
cd ai-helper-next
npx shadcn@latest add [component-name]
```

### Modifying the Comparison Table
Edit `app/page.tsx` - the table is inline in the home page component.

## Important Notes

- **Korean Content**: Site content is in Korean (한국어)
- **GitHub Pages**: Base path is `/ai-helper` - all links must use this prefix
- **Static Export**: No server-side features (API routes, SSR, ISR)
- **Backup**: `backup_20251111_040403/` contains archived previous build
- **Extra HTML Files**: `claude/` directory has additional HTML guides:
  - `claude_plugins.html`
  - `claude_pricing_tokens.html`
  - `클로드_팁.html` (Korean tips)

## Dependencies Summary

**Production**:
- next, react, react-dom
- @radix-ui/* (accordion, avatar, separator, slot)
- class-variance-authority, clsx, tailwind-merge
- lucide-react
- tailwindcss-animate

**Development**:
- typescript, @types/*
- eslint, eslint-config-next
- autoprefixer, postcss, tailwindcss
