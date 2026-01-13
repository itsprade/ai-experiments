---
name: blog-typography
description: Applies professional blog typography patterns for React/Next.js with Tailwind. Use when designing blog content, article layouts, essay pages, or long-form content with proper hierarchy, spacing, and readability.
---

# Blog Typography Design Pattern

Apply this typography system when creating blog content, essays, or long-form article layouts.

## Typography Hierarchy

### Page Title (H1)
```tsx
<h1
  className="text-[28px] md:text-[36px] lg:text-[42px] leading-[1.1] tracking-[-0.02em] text-black font-bold mb-6"
  style={{ fontFamily: 'var(--font-bricolage)' }}
>
  Title Here
</h1>
```

### Section Labels (H2)
Small uppercase labels that categorize content sections:
```tsx
<h2
  className="text-[12px] uppercase leading-none tracking-[0.08em] text-black/40 font-semibold mb-6"
  style={{ fontFamily: 'var(--font-bricolage)' }}
>
  Section Name
</h2>
```

### Numbered Items / Subsection Headings (H3)
```tsx
<h3
  className="text-[18px] md:text-[20px] leading-[1.2] tracking-[-0.01em] text-black font-semibold mb-3"
  style={{ fontFamily: 'var(--font-bricolage)' }}
>
  1. Subsection Title
</h3>
```

### Card Headings (H3 variant)
For content inside card-style containers or question sections:
```tsx
<h3
  className="text-[16px] md:text-[18px] leading-[1.3] tracking-[-0.01em] text-black font-semibold mb-3"
  style={{ fontFamily: 'var(--font-bricolage)' }}
>
  Card Title
</h3>
```

## Body Text Patterns

All body text uses **14px** as the standard size for consistency and readability.

### Primary Body Text
Main content paragraphs:
```tsx
<p className="font-inter text-[14px] leading-[1.6] text-black/70">
  Content here...
</p>
```

### Secondary Body Text
Supporting content, descriptions:
```tsx
<p className="font-inter text-[14px] leading-[1.65] text-black/65">
  Secondary content...
</p>
```

### Muted Body Text
Less prominent content:
```tsx
<p className="font-inter text-[14px] leading-[1.6] text-black/60">
  Muted content...
</p>
```

### Small Labels
For labels like "Today" / "Tomorrow":
```tsx
<p className="font-inter text-[11px] font-medium text-black/40 uppercase tracking-[0.1em] mb-2">
  Label
</p>
```

### Footer Text
```tsx
<p className="font-inter text-[13px] leading-normal text-black/40">
  Footer content...
</p>
```

## Text Emphasis

### Inline Emphasis
For key terms within body text:
```tsx
<em className="not-italic text-black/90 font-medium">emphasized term</em>
```

### Lighter Emphasis
```tsx
<em className="not-italic text-black/80">lighter emphasis</em>
```

## Layout Components

### Article Container
```tsx
<div className="h-full bg-white overflow-y-auto">
  <div className="px-6 md:px-16 lg:px-24 py-16 md:py-20 lg:py-24">
    <article className="max-w-[640px] mx-auto md:mx-0">
      {/* Content */}
    </article>
  </div>
</div>
```

### Hero Section
```tsx
<header className="mb-16 md:mb-20">
  {/* H1 + intro paragraphs */}
</header>
```

### Content Section
```tsx
<section className="mb-14 md:mb-16">
  {/* H2 label + content */}
</section>
```

### Comparison Block (Today/Tomorrow style)
```tsx
<div className="space-y-4 mb-6">
  <div className="border-l-2 border-black/10 pl-4">
    <p className="font-inter text-[11px] font-medium text-black/40 uppercase tracking-[0.1em] mb-2">
      Label
    </p>
    <p className="font-inter text-[14px] leading-normal text-black/60">
      Content
    </p>
  </div>
  <div className="border-l-2 border-black/30 pl-4">
    <p className="font-inter text-[11px] font-medium text-black/40 uppercase tracking-[0.1em] mb-2">
      Label
    </p>
    <p className="font-inter text-[14px] leading-normal text-black/80">
      Content (emphasized)
    </p>
  </div>
</div>
```

### Custom Bullet List
```tsx
<ul className="space-y-2.5 mb-6">
  <li className="font-inter text-[14px] leading-normal text-black/65 pl-5 relative before:content-[''] before:absolute before:left-0 before:top-[0.6em] before:w-1.5 before:h-1.5 before:bg-black/20 before:rounded-full">
    List item
  </li>
</ul>
```

### Footer/Next Section
```tsx
<footer className="pt-8 border-t border-black/[0.06]">
  <p className="font-inter text-[13px] leading-normal text-black/40">
    <span className="text-black/60 font-medium">Next up:</span>{' '}
    <span className="text-black/50 italic">Preview text</span>
  </p>
</footer>
```

## Color System

| Use Case | Color |
|----------|-------|
| Primary headings | `text-black` |
| Section labels | `text-black/40` |
| Primary body | `text-black/70` |
| Secondary body | `text-black/65` |
| Muted body | `text-black/60` |
| Footer text | `text-black/50` or `text-black/40` |
| Emphasis | `text-black/90` or `text-black/80` |
| Borders | `border-black/10` to `border-black/30` |

## Font Size System

| Element | Size |
|---------|------|
| Page title (H1) | `28px` → `36px` → `42px` (responsive) |
| Numbered headings (H3) | `18px` → `20px` (responsive) |
| Card headings (H3) | `16px` → `18px` (responsive) |
| Section labels (H2) | `12px` (uppercase) |
| Body text | `14px` (standard) |
| Footer text | `13px` |
| Small labels | `11px` (uppercase) |

## Spacing System

| Element | Spacing |
|---------|---------|
| Hero section bottom | `mb-16 md:mb-20` |
| Content sections | `mb-14 md:mb-16` |
| Section header to content | `mb-6` to `mb-8` |
| Heading to paragraph | `mb-3` |
| Paragraph spacing | `space-y-4` |
| List item spacing | `space-y-2.5` |
| Numbered items | `space-y-8` |

## Font Requirements

Requires these fonts in layout.tsx:
```tsx
import { Inter, Bricolage_Grotesque } from "next/font/google";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const bricolageGrotesque = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});
```

Apply to body:
```tsx
<body className={`${inter.variable} ${bricolageGrotesque.variable} antialiased`}>
```
