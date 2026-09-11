# Component Reference

> Repeated DOM patterns detected by structural analysis. Each component appeared 3+ times.

## Detected Components

| Component | Category | Instances | Key Classes |
|-----------|----------|-----------|-------------|
| **Font Normal** | unknown | 17× | `.font-normal`, `.font-sans`, `.text-base` |
| **Flex** | list-item | 12× | `.flex`, `.gap-2` |
| **Font Display** | unknown | 7× | `.font-display`, `.font-medium`, `.leading-normal` |
| **Font Medium** | unknown | 7× | `.font-medium`, `.font-sans`, `.text-base` |
| **Flex** | unknown | 6× | `.flex`, `.gap-3` |
| **Flex** | unknown | 6× | `.flex`, `.flex-1`, `.flex-col` |
| **Flex** | unknown | 6× | `.flex`, `.flex-col`, `.text-ink-dim` |
| **Align Baseline** | unknown | 3× | `.align-baseline`, `.inline-flex`, `.overflow-hidden` |
| **Left [0.15em]** | unknown | 3× | `.-left-[0.15em]`, `.-right-[0.18em]`, `.absolute` |
| **Mix Blend Difference** | unknown | 3× | `.mix-blend-difference`, `.pl-[0.15em]`, `.pr-[0.18em]` |
| **Flex** | unknown | 3× | `.flex`, `.flex-col`, `.gap-8` |
| **Bg Tint** | card | 3× | `.bg-tint`, `.border`, `.border-chip-border` |
| **Flex** | card | 3× | `.flex`, `.items-center`, `.justify-between` |
| **Font Normal** | unknown | 3× | `.font-normal`, `.font-sans`, `.text-base` |

## Cards

### Bg Tint

**Instances found:** 3

**CSS classes:** `.bg-tint` `.border` `.border-chip-border` `.font-normal` `.inline-flex` `.items-center`

**HTML structure:**

```html
<span class="inline-flex items-center px-3 py-1.5 rounded text-base font-normal bg-tint text-chip-ink border border-chip-border">ERP</span>
```

**Base styles (from design tokens):**

```css
.bg-tint {
  background: #f0f0f0;
  border-radius: 6px;
  padding: 8px;
}```

### Flex

**Instances found:** 3

**CSS classes:** `.flex` `.items-center` `.justify-between`

**HTML structure:**

```html
<div class="flex items-center justify-between"><p class="font-sans text-base font-normal">Email</p><a href="mailto:dnh2703@gmail.com" target="_blank" rel="noopener noreferrer" class="font-sans text-base font-normal text-ink-dim hover:text-ink transition-colors">dnh2703@gmail.com</a></div>
```

**Base styles (from design tokens):**

```css
.flex {
  background: #f0f0f0;
  border-radius: 6px;
  padding: 8px;
}```

## List Items

### Flex

**Instances found:** 12

**CSS classes:** `.flex` `.gap-2`

**HTML structure:**

```html
<li class="flex gap-2"><span class="shrink-0">•</span><p class="font-sans text-base font-normal">Built a booking platform with Next.js 16…</p></li>
```

**Base styles (from design tokens):**

```css
.flex {
  padding: 4px 0;
}```

## Other Components

### Font Normal

**Instances found:** 17

**CSS classes:** `.font-normal` `.font-sans` `.text-base`

**HTML structure:**

```html
<p class="font-sans text-base font-normal">Built a booking platform with Next.js 16 and TailwindCSS following Feature-Sliced Design architecture.</p>
```

**Base styles (from design tokens):**

```css
.font-normal {
  background: #f0f0f0;
  padding: 4px;
}```

### Font Display

**Instances found:** 7

**CSS classes:** `.font-display` `.font-medium` `.leading-normal` `.text-sm` `.tracking-normal` `.uppercase`

**HTML structure:**

```html
<p class="font-display text-sm font-medium tracking-normal leading-normal uppercase">About</p>
```

**Base styles (from design tokens):**

```css
.font-display {
  background: #f0f0f0;
  padding: 4px;
}```

### Font Medium

**Instances found:** 7

**CSS classes:** `.font-medium` `.font-sans` `.text-base` `.text-black`

**HTML structure:**

```html
<h3 class="font-sans text-base text-black font-medium">Web Developer - Appointment Booking</h3>
```

**Base styles (from design tokens):**

```css
.font-medium {
  background: #f0f0f0;
  padding: 4px;
}```

### Flex

**Instances found:** 6

**CSS classes:** `.flex` `.gap-3`

**HTML structure:**

```html
<div class="flex gap-3"><div class="size-7 overflow-hidden shrink-0"><img alt="VMO Holdings logo" loading="lazy" width="40" height="40" decoding="async" data-nimg="1" class="object-cover w-full h-full" style="color:transparent" srcset="/_next/image?url=%2Fvmo-logo.png&amp;w=48&amp;q=75 1x, /_next/image?url=%2Fvmo-logo.png&amp;w=96&amp;q=75 2x" src="/_next/image?url=%2Fvmo-logo.png&amp;w=96&amp;q=75"></div><div class="flex-1 flex flex-col gap-2"><div><h3 class="font-sans text-base text-black font-medium">Web Developer - Appointment Booking</h3><p class="font-display text-xs font-normal tracking
```

**Base styles (from design tokens):**

```css
.flex {
  background: #f0f0f0;
  padding: 4px;
}```

### Flex

**Instances found:** 6

**CSS classes:** `.flex` `.flex-1` `.flex-col` `.gap-2`

**HTML structure:**

```html
<div class="flex-1 flex flex-col gap-2"><div><h3 class="font-sans text-base text-black font-medium">Web Developer - Appointment Booking</h3><p class="font-display text-xs font-normal tracking-normal leading-normal text-ink-dim flex gap-1">VMO Holdings<span>·</span>10/2025 – Present</p></div><ul class="flex flex-col text-ink-dim"><li class="flex gap-2"><span class="shrink-0">•</span><p class="font-sans text-base font-normal">Built a booking platform with Next.js 16…</p></li><li class="flex gap-2"><span class="shrink-0">•</span><p class="font-sans text-base font-normal">Integrated RESTful APIs f
```

**Base styles (from design tokens):**

```css
.flex {
  background: #f0f0f0;
  padding: 4px;
}```

### Flex

**Instances found:** 6

**CSS classes:** `.flex` `.flex-col` `.text-ink-dim`

**HTML structure:**

```html
<ul class="flex flex-col text-ink-dim"><li class="flex gap-2"><span class="shrink-0">•</span><p class="font-sans text-base font-normal">Built a booking platform with Next.js 16…</p></li><li class="flex gap-2"><span class="shrink-0">•</span><p class="font-sans text-base font-normal">Integrated RESTful APIs for scheduling, …</p></li></ul>
```

**Base styles (from design tokens):**

```css
.flex {
  background: #f0f0f0;
  padding: 4px;
}```

### Align Baseline

**Instances found:** 3

**CSS classes:** `.align-baseline` `.inline-flex` `.overflow-hidden` `.relative`

**HTML structure:**

```html
<span class="relative inline-flex overflow-hidden align-baseline"><span class="absolute inset-0 -left-[0.15em] -right-[0.18em] bg-black z-0" style="transform: none;"></span><span class="relative z-10 mix-blend-difference text-white pl-[0.15em] pr-[0.18em]">3 years of experience</span></span>
```

**Base styles (from design tokens):**

```css
.align-baseline {
  background: #f0f0f0;
  padding: 4px;
}```

### Left [0.15em]

**Instances found:** 3

**CSS classes:** `.-left-[0.15em]` `.-right-[0.18em]` `.absolute` `.bg-black` `.inset-0` `.z-0`

**HTML structure:**

```html
<span class="absolute inset-0 -left-[0.15em] -right-[0.18em] bg-black z-0" style="transform: none;"></span>
```

**Base styles (from design tokens):**

```css
.-left-[0.15em] {
  background: #f0f0f0;
  padding: 4px;
}```

### Mix Blend Difference

**Instances found:** 3

**CSS classes:** `.mix-blend-difference` `.pl-[0.15em]` `.pr-[0.18em]` `.relative` `.text-white` `.z-10`

**HTML structure:**

```html
<span class="relative z-10 mix-blend-difference text-white pl-[0.15em] pr-[0.18em]">3 years of experience</span>
```

**Base styles (from design tokens):**

```css
.mix-blend-difference {
  background: #f0f0f0;
  padding: 4px;
}```

### Flex

**Instances found:** 3

**CSS classes:** `.flex` `.flex-col` `.gap-8` `.px-4` `.py-8`

**HTML structure:**

```html
<section aria-label="Experience" class="px-4 py-8 flex flex-col gap-8"><p class="font-display text-sm font-medium tracking-normal leading-normal uppercase">Experience</p><div class="flex flex-col gap-8"><div class="flex gap-3"><div class="size-7 overflow-hidden shrink-0"><img alt="VMO Holdings logo" loading="lazy" width="40" height="40" decoding="async" data-nimg="1" class="object-cover w-full h-full" style="color:transparent" srcset="/_next/image?url=%2Fvmo-logo.png&amp;w=48&amp;q=75 1x, /_next/image?url=%2Fvmo-logo.png&amp;w=96&amp;q=75 2x" src="/_next/image?url=%2Fvmo-logo.png&amp;w=96&amp;
```

**Base styles (from design tokens):**

```css
.flex {
  background: #f0f0f0;
  padding: 4px;
}```

### Font Normal

**Instances found:** 3

**CSS classes:** `.font-normal` `.font-sans` `.text-base` `.text-ink-dim` `.transition-colors`

**HTML structure:**

```html
<a href="mailto:dnh2703@gmail.com" target="_blank" rel="noopener noreferrer" class="font-sans text-base font-normal text-ink-dim hover:text-ink transition-colors">dnh2703@gmail.com</a>
```

**Base styles (from design tokens):**

```css
.font-normal {
  background: #f0f0f0;
  padding: 4px;
}```

## Component Rules

- Match class names exactly from the patterns above
- Each component instance must be visually identical to others of its type
- Do not add extra wrappers or change the DOM structure

