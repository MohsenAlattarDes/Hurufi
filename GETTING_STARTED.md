# Getting Started

This guide will help you run the Arabic Typography microsite locally.

## Prerequisites

- Node.js 18.x or higher
- npm or yarn package manager

## Installation

1. Navigate to the project directory:
```bash
cd /Users/EPICMOHSEN/Desktop/Demo
```

2. Install dependencies:
```bash
npm install
```

## Development

Start the development server:
```bash
npm run dev
```

The site will be available at [http://localhost:3000](http://localhost:3000)

## Project Overview

The site has three main pages:

1. **Index** (`/`) — Table of contents listing all entries
2. **Entry pages** (`/entries/[slug]`) — Individual concept explanations
3. **About** (`/about`) — Method and philosophy

## Available Entries

The site currently includes these sample entries:

- **Connecting Letters** — How Arabic letters join together
- **Letter Forms** — Positional variations of letters
- **Baseline and Proportions** — Vertical structure
- **Kashida** — Horizontal elongation for justification
- **Diacritics** — Vocalization marks

## Customization

### Adding New Entries

Edit `data/entries.ts` and add new entry objects following the existing structure.

### Modifying Typography

Edit `styles/globals.css` to adjust:
- Color palette (CSS custom properties at top)
- Typography scale
- Spacing system
- Font families

### Adjusting Layout

The layout is controlled by CSS custom properties:
- `--max-reading-width`: Maximum text column width
- `--page-margin`: Horizontal page margins
- `--section-spacing`: Vertical section spacing

## Design Philosophy

This project follows strict design principles:

- Typography is the interface
- No decoration or ornament
- Print-inspired, not app-like
- Built for longevity
- Calm, confident, slow

Do not add:
- Animations (except explanatory)
- Marketing copy
- Gamification
- Progress tracking
- Unnecessary interactions

## Building for Production

Create an optimized production build:
```bash
npm run build
```

Start the production server:
```bash
npm start
```

## Technology Stack

- **Next.js 14+** with App Router
- **TypeScript** for type safety
- **CSS-in-JS** (styled-jsx) for component styles
- **System fonts** for both Arabic and Latin text

## Browser Support

The site uses modern web standards and is optimized for current browsers. The typography system relies on CSS custom properties and flexbox/grid.

## Notes

- The site is intentionally minimal
- No client-side JavaScript beyond Next.js essentials
- All pages are statically generated at build time
- Direct URL access to all content
- No search functionality (by design)
- No navigation beyond Index and About
