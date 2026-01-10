# Page Customization Guide

This project now supports fully customizable page content. Each of the 10 pages can have completely different layouts, content structures, and styling.

## Architecture

The system uses a component-based approach where each page has its own dedicated React component file.

### File Structure

```
components/pages/
├── Page1Content.tsx    # Home page content
├── Page2Content.tsx    # Page 2 content (blog-style example)
├── Page3Content.tsx    # Page 3 content
└── ... (Page4-10)

lib/
└── pageContent.ts      # Configuration file that maps pages to components
```

## How to Customize a Page

### Option 1: Edit Existing Page Content

Simply edit the corresponding page component file in `components/pages/`:

```tsx
// Example: components/pages/Page1Content.tsx
export function Page1Content() {
  return (
    <div className="h-full bg-white flex items-center justify-center px-6 md:px-16 py-8 md:py-0">
      {/* Your custom content here */}
    </div>
  );
}
```

### Option 2: Create Complex Layouts

You can create blog-style articles, multi-section layouts, or any custom structure. See `Page2Content.tsx` for a blog-style example with:
- Article headers
- Multiple sections
- Custom typography
- Scrollable content

```tsx
// Example blog-style layout
export function Page2Content() {
  return (
    <div className="h-full bg-white overflow-y-auto">
      <div className="max-w-[835px] mx-auto px-6 md:px-16 py-12 md:py-16">
        <h1>Article Title</h1>
        <section>
          <h2>Section Title</h2>
          <p>Content...</p>
        </section>
      </div>
    </div>
  );
}
```

### Option 3: Change Page Gradients

Edit `lib/pageContent.ts` to customize the gradient background for each page:

```tsx
export const pageConfigs: Record<number, PageConfig> = {
  1: {
    leftPanelComponent: Page1Content,
    gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' // Edit this
  },
  // ... other pages
};
```

## Available Design Tokens

### Typography
- **Font Families:**
  - `var(--font-krona)` - Krona One (for headings)
  - `font-inter` - Inter (for body text)

### Spacing (Tailwind)
- Padding: `px-6 md:px-16` (responsive)
- Margins: `py-8 md:py-0`
- Max width: `max-w-[835px]`

### Colors
- Text: `text-black`, `text-black/70`, `text-black/50`
- Background: `bg-white`

## Layout Guidelines

### Centered Layout (Default)
```tsx
<div className="h-full bg-white flex items-center justify-center px-6 md:px-16 py-8 md:py-0">
  <div className="max-w-[835px] space-y-6 md:space-y-8">
    {/* Content */}
  </div>
</div>
```

### Scrollable Layout (For long content)
```tsx
<div className="h-full bg-white overflow-y-auto">
  <div className="max-w-[835px] mx-auto px-6 md:px-16 py-12 md:py-16">
    {/* Content */}
  </div>
</div>
```

## Creating a New Page

1. **Create the component file:**
   ```bash
   components/pages/PageXContent.tsx
   ```

2. **Export your component:**
   ```tsx
   export function PageXContent() {
     return (
       <div className="h-full bg-white">
         {/* Your content */}
       </div>
     );
   }
   ```

3. **Register in `lib/pageContent.ts`:**
   ```tsx
   import { PageXContent } from '@/components/pages/PageXContent';

   export const pageConfigs: Record<number, PageConfig> = {
     X: {
       leftPanelComponent: PageXContent,
       gradient: 'linear-gradient(135deg, #color1 0%, #color2 100%)'
     }
   };
   ```

## Examples

### Simple Question Layout
```tsx
export function Page1Content() {
  return (
    <div className="h-full bg-white flex items-center justify-center px-6 md:px-16 py-8 md:py-0">
      <div className="max-w-[835px] space-y-6 md:space-y-8">
        <h1 style={{ fontFamily: 'var(--font-krona)' }}>
          Your Question
        </h1>
        <div className="space-y-3 md:space-y-4">
          <p className="font-inter text-[14px]">Sub-question 1</p>
          <p className="font-inter text-[14px]">Sub-question 2</p>
        </div>
      </div>
    </div>
  );
}
```

### Blog Article Layout
See `components/pages/Page2Content.tsx` for a complete example with:
- Article header with metadata
- Multiple sections
- Headers and paragraphs
- Bullet lists
- Responsive typography

## Responsive Design

The left panel is responsive by default:
- **Mobile**: Stacked layout, fixed 600px height for top section
- **Desktop**: Resizable side-by-side panels with 600px minimum width

Your custom components should follow this pattern:
```tsx
className="px-6 md:px-16 py-8 md:py-0"
//          mobile      desktop
```

## Best Practices

1. **Keep max-width consistent**: Use `max-w-[835px]` for content containers
2. **Use responsive spacing**: Always provide mobile and desktop variants
3. **Follow typography scale**: Use existing font sizes for consistency
4. **Test scrolling**: If content exceeds viewport, use `overflow-y-auto`
5. **Maintain accessibility**: Use semantic HTML (h1, h2, section, article)

## Need Help?

- Check existing page components for examples
- Reference Tailwind CSS v4 documentation
- See `Page2Content.tsx` for a complex layout example
