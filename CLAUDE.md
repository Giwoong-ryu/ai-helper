# AI Helper - Claude Code Guidelines

This document provides comprehensive guidance for AI assistants working with the ai-helper codebase.

## Project Overview

AI Helper is a Korean-language integrated guide for AI tools (Claude, ChatGPT, Gemini, Perplexity). It provides usage guides, comparisons, and resources for each AI platform. The project is deployed to GitHub Pages as a static site.

**Author:** Giwoong Ryu ([@Giwoong-ryu](https://github.com/Giwoong-ryu))

## Repository Structure

```
ai-helper/
├── ai-helper-next/          # Next.js source code (development)
│   ├── app/                 # App Router pages
│   │   ├── layout.tsx       # Root layout with metadata
│   │   ├── page.tsx         # Home page with AI tool cards & comparison table
│   │   ├── globals.css      # Global styles & CSS variables
│   │   ├── claude/          # Claude guide page
│   │   ├── chatgpt/         # ChatGPT guide page (coming soon)
│   │   ├── gemini/          # Gemini guide page (coming soon)
│   │   └── perplexity/      # Perplexity guide page (coming soon)
│   ├── components/          # React components
│   │   ├── ui/              # ShadCN UI components
│   │   ├── coming-soon.tsx  # Reusable coming soon template
│   │   └── comparison-table.tsx
│   ├── lib/                 # Utility functions
│   │   └── utils.ts         # cn() helper for classnames
│   ├── public/              # Static assets
│   ├── next.config.mjs      # Next.js configuration
│   ├── tailwind.config.ts   # Tailwind CSS configuration
│   ├── tsconfig.json        # TypeScript configuration
│   └── components.json      # ShadCN UI configuration
├── _next/                   # Built static assets (generated)
├── claude/                  # Built Claude page
├── chatgpt/                 # Built ChatGPT page
├── gemini/                  # Built Gemini page
├── perplexity/              # Built Perplexity page
├── index.html               # Built home page
├── 404.html                 # 404 error page
├── ai도구_강의.html          # Korean lecture page
└── .nojekyll                # Disable Jekyll for GitHub Pages
```

## Tech Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| Next.js | 15+ | React framework with App Router |
| React | 19 | UI library |
| TypeScript | 5.7+ | Type safety |
| Tailwind CSS | 3.4+ | Utility-first styling |
| ShadCN UI | latest | Component library |
| Radix UI | latest | Headless UI primitives |
| Lucide React | latest | Icon library |

## Development Commands

All commands should be run from the `ai-helper-next/` directory:

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production (static export)
npm run build

# Start production server (for testing)
npm start

# Run linter
npm run lint
```

## Deployment Configuration

The project uses **static export** for GitHub Pages hosting:

```javascript
// next.config.mjs
const nextConfig = {
  output: 'export',           // Static HTML export
  images: { unoptimized: true }, // Required for static export
  basePath: '/ai-helper',     // GitHub Pages subdirectory
  assetPrefix: '/ai-helper',  // Asset URL prefix
  trailingSlash: true,        // Required for GitHub Pages routing
};
```

**Important:** All internal links must include the `/ai-helper` base path.

## Code Conventions

### TypeScript

- Strict mode enabled
- Use ES2022 target
- Path alias: `@/*` maps to project root
- All components should be properly typed

### Component Patterns

```tsx
// Page components export metadata
export const metadata = {
  title: "Page Title - AI Helper",
  description: "Page description",
};

// Use ShadCN UI components from @/components/ui/
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

// Use cn() utility for conditional classnames
import { cn } from "@/lib/utils";
className={cn("base-class", conditional && "conditional-class")}
```

### Styling Guidelines

- Use Tailwind CSS utility classes
- CSS variables defined in `globals.css` for theming
- Support dark mode with `.dark` class
- Color palette based on ShadCN defaults with purple primary accent
- Use semantic color tokens: `bg-background`, `text-foreground`, `bg-muted`, etc.

### File Naming

- Components: PascalCase (`ComingSoon.tsx`)
- Pages: `page.tsx` in route directories
- Utilities: camelCase (`utils.ts`)
- Config files: lowercase with appropriate extension

## ShadCN UI Components Available

Located in `components/ui/`:
- `accordion.tsx` - Collapsible content sections
- `avatar.tsx` - User avatar display
- `badge.tsx` - Status/label badges
- `button.tsx` - Button variants (default, destructive, outline, secondary, ghost, link)
- `card.tsx` - Card container with header, content, footer
- `input.tsx` - Form input field
- `separator.tsx` - Visual divider

To add new ShadCN components:
```bash
npx shadcn@latest add [component-name]
```

## Page Structure Template

All pages follow this structure:

```tsx
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export const metadata = {
  title: "Page Title - AI Helper",
  description: "Page description",
};

export default function PageName() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      {/* Header with back navigation */}
      <header className="border-b bg-background/95 backdrop-blur">
        <div className="container mx-auto px-4 py-6">
          {/* Navigation content */}
        </div>
      </header>

      {/* Main content section */}
      <section className="container mx-auto px-4 py-16">
        {/* Page content */}
      </section>

      {/* Footer */}
      <footer className="border-t bg-muted/50">
        <div className="container mx-auto px-4 py-8 text-center">
          {/* Footer content */}
        </div>
      </footer>
    </main>
  );
}
```

## Content Status

| AI Tool | Status | Description |
|---------|--------|-------------|
| Claude | Complete | 31 skillsets, 17 commands, 60 agents |
| ChatGPT | Coming Soon | Uses `ComingSoon` component |
| Gemini | Coming Soon | Uses `ComingSoon` component |
| Perplexity | Coming Soon | Uses `ComingSoon` component |

## Build & Deployment Workflow

1. Make changes in `ai-helper-next/`
2. Run `npm run build` to generate static files to `out/`
3. Copy built files from `out/` to repository root
4. Commit and push to deploy to GitHub Pages

**Note:** The root directory contains the built static files that are served by GitHub Pages. The source code lives in `ai-helper-next/`.

## Korean Language Support

- Primary language is Korean (ko)
- HTML lang attribute set to `ko`
- All user-facing content is in Korean
- Commit messages can be in Korean or English

## Git Commit Style

Based on recent commits, the project follows conventional commits:
- `feat:` - New features
- `fix:` - Bug fixes
- `refactor:` - Code refactoring
- `chore:` - Maintenance tasks
- Mixed Korean/English commit messages acceptable

## Key Dependencies

```json
{
  "dependencies": {
    "@radix-ui/react-accordion": "^1.2.12",
    "@radix-ui/react-avatar": "^1.1.11",
    "@radix-ui/react-separator": "^1.1.8",
    "@radix-ui/react-slot": "^1.2.4",
    "class-variance-authority": "^0.7.1",
    "clsx": "^2.1.1",
    "lucide-react": "^0.553.0",
    "next": "^15.1.0",
    "react": "^19.0.0",
    "react-dom": "^19.0.0",
    "tailwind-merge": "^3.4.0",
    "tailwindcss-animate": "^1.0.7"
  }
}
```

## Common Tasks for AI Assistants

### Adding a New AI Tool Page

1. Create directory: `app/[tool-name]/`
2. Create `page.tsx` with metadata export
3. Use `ComingSoon` component for placeholder or build full content
4. Add navigation link on home page

### Adding ShadCN UI Component

```bash
cd ai-helper-next
npx shadcn@latest add [component-name]
```

### Modifying Home Page Cards

Edit `app/page.tsx` - cards are in the `#ai-tools` section with grid layout.

### Updating Comparison Table

Edit `app/page.tsx` - table is in the `#ai-tools-compare` section.

### Building for Production

```bash
cd ai-helper-next
npm run build
# Output will be in 'out/' directory
```

## Important Notes

- Always test changes with `npm run dev` before building
- Static export means no server-side features (API routes, server actions)
- All images must be in `public/` and use unoptimized mode
- External links should use `target="_blank" rel="noopener noreferrer"`
- Use responsive design patterns (sm:, md:, lg: breakpoints)
