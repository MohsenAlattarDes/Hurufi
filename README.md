# Arabic Typography

A calm, book-like microsite that teaches Arabic typography as a system to non-Arabic-speaking designers through visual explanation.

## Project Structure

```
/
├── app/
│   ├── layout.tsx          # Root layout with navigation
│   ├── page.tsx            # Index page (table of contents)
│   ├── about/
│   │   └── page.tsx        # About/method page
│   ├── entries/
│   │   └── [slug]/
│   │       └── page.tsx    # Dynamic entry template
│   └── not-found.tsx       # 404 page
├── components/
│   ├── Navigation.tsx      # Minimal navigation bar
│   ├── EntryCard.tsx       # Card-like section container
│   ├── ArabicDisplay.tsx   # Arabic text display component
│   ├── Comparison.tsx      # Side-by-side comparison component
│   └── LetterForms.tsx     # Letter forms demonstration component
├── data/
│   └── entries.ts          # Entry content and data structure
└── styles/
    └── globals.css         # Global typography system and styles
```

## Design Principles

1. **Typography is the interface** — No UI decoration, hierarchy through type only
2. **Print logic applied to web** — Section breaks feel like page turns
3. **Calm, confident, slow, authored** — No marketing language or gamification
4. **Visual explanation** — Show, don't tell
5. **Single-column, centered, wide margins** — Print-inspired layout
6. **Archival quality** — Built to last unchanged for years

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Typography System

The site uses a modular scale (1.25 ratio) with CSS custom properties for:

- **Colors**: Near-black text on warm off-white background
- **Fonts**: System fonts for Latin, Arabic system fonts (Geeza Pro, Traditional Arabic)
- **Scale**: 6-level typographic scale
- **Spacing**: 8-level spacing system
- **Layout**: Max reading width of 70ch with generous margins

## Adding New Entries

To add a new entry:

1. Add entry data to `data/entries.ts`
2. Follow the `Entry` interface structure
3. Use available content types: `text`, `arabic`, `comparison`, `letterforms`, `diagram`
4. Entry pages are automatically generated from the slug

## Content Types

- **text**: Body paragraphs
- **arabic**: Arabic text display with optional description
- **comparison**: Side-by-side Latin/Arabic comparison
- **letterforms**: Grid of letter forms with labels
- **diagram**: Placeholder for structural diagrams

## Building for Production

```bash
npm run build
npm start
```

## Design Notes

- No animations except explanatory ones
- Subtle hover states (opacity change only)
- Linear, predictable scroll
- No modals, tooltips, or popups
- Arabic text always has proper RTL support
- Minimum Arabic text size: 32px for readability
- Interface should disappear behind content
