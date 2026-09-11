# Component Reference

> Repeated DOM patterns detected by structural analysis. Each component appeared 3+ times.

## Detected Components

| Component | Category | Instances | Key Classes |
|-----------|----------|-----------|-------------|
| **Div** | unknown | 5× |  |
| **Flex** | unknown | 5× | `.flex`, `.flex-col`, `.gap-1` |
| **Font Normal** | unknown | 5× | `.font-normal`, `.group-hover:text-secondary`, `.leading-snug` |
| **Leading Normal** | nav-item | 5× | `.leading-normal`, `.shrink-0`, `.tabular-nums` |
| **Focus Visible:Outline None** | unknown | 3× | `.focus-visible:outline-none`, `.group` |

## Navigation Items

### Leading Normal

**Instances found:** 5

**CSS classes:** `.leading-normal` `.shrink-0` `.tabular-nums` `.text-[0.8125rem]` `.text-tertiary` `.tracking-wide`

**HTML structure:**

```html
<span class="text-[0.8125rem] md:text-[0.875rem] text-tertiary shrink-0 leading-normal tracking-wide tabular-nums sm:text-right">Aug 24, 2026</span>
```

**Base styles (from design tokens):**

```css
.leading-normal {
  padding: 4px 8px;
  cursor: pointer;
  /* active: color: #4a5565; */
}```

## Other Components

### Div

**Instances found:** 5

**HTML structure:**

```html
<div data-reveal="true" style="animation-delay:140ms" class=""><a class="group flex flex-col gap-1 py-2.5 sm:flex-row sm:items-center sm:gap-3 md:py-2" href="/poems/no-excuse"><span class="flex items-center justify-between gap-3 sm:contents"><span class="text-[0.9375rem] md:text-[1rem] text-primary group-hover:text-secondary min-w-0 shrink leading-snug font-normal transition-colors">No Excuse</span><span aria-hidden="true" class="text-tertiary group-hover:text-secondary inline-flex shrink-0 items-center justify-center transition-colors sm:hidden"><svg xmlns="http://www.w3.org/2000/svg" fill="n
```

**Base styles (from design tokens):**

```css
.div {
  background: #f2ede8;
  padding: 4px;
}```

### Flex

**Instances found:** 5

**CSS classes:** `.flex` `.flex-col` `.gap-1` `.group` `.py-2.5`

**HTML structure:**

```html
<a class="group flex flex-col gap-1 py-2.5 sm:flex-row sm:items-center sm:gap-3 md:py-2" href="/poems/no-excuse"><span class="flex items-center justify-between gap-3 sm:contents"><span class="text-[0.9375rem] md:text-[1rem] text-primary group-hover:text-secondary min-w-0 shrink leading-snug font-normal transition-colors">No Excuse</span><span aria-hidden="true" class="text-tertiary group-hover:text-secondary inline-flex shrink-0 items-center justify-center transition-colors sm:hidden"><svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejo
```

**Base styles (from design tokens):**

```css
.flex {
  background: #f2ede8;
  padding: 4px;
}```

### Font Normal

**Instances found:** 5

**CSS classes:** `.font-normal` `.group-hover:text-secondary` `.leading-snug` `.min-w-0` `.shrink` `.text-[0.9375rem]`

**HTML structure:**

```html
<span class="text-[0.9375rem] md:text-[1rem] text-primary group-hover:text-secondary min-w-0 shrink leading-snug font-normal transition-colors">No Excuse</span>
```

**Base styles (from design tokens):**

```css
.font-normal {
  background: #f2ede8;
  padding: 4px;
}```

### Focus Visible:Outline None

**Instances found:** 3

**CSS classes:** `.focus-visible:outline-none` `.group`

**HTML structure:**

```html
<a class="group focus-visible:outline-none" aria-current="page" href="/"><div class="text-[0.9375rem] md:text-[1rem] focus-visible:text-primary font-medium tracking-wide transition-colors text-primary">Home</div></a>
```

**Base styles (from design tokens):**

```css
.focus-visible:outline-none {
  background: #f2ede8;
  padding: 4px;
}```

## Component Rules

- Match class names exactly from the patterns above
- Each component instance must be visually identical to others of its type
- Do not add extra wrappers or change the DOM structure
- Use `#4a5565` for all interactive/active states

