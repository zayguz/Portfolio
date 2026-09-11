# Layout Reference

> Auto-extracted from live DOM. Use this to understand how the site is structured spatially.

## Spacing System

**Base grid:** 4px

**Scale:** `2, 4, 6, 8, 12, 16, 24, 32, 40` px

| Spacing | Semantic Use |
|---------|-------------|
| 4px | Tight — within a component |
| 8px | Medium — between sibling items |
| 16px | Wide — between sections |
| 32px | Vast — major section breaks |

## Flex Layouts

| Element | Direction | Justify | Align | Gap | Children |
|---------|-----------|---------|-------|-----|----------|
| `footer.py-10.flex` | column | — | center | 12px | 2 |
| `section.px-4.py-8` | column | — | — | 16px | 2 |
| `section.px-4.py-8` | column | — | — | 32px | 2 |
| `section.px-4.py-8` | column | — | — | 32px | 2 |
| `section.px-4.py-8` | column | — | — | 32px | 2 |
| `div.font-display.flex` | row | space-between | center | — | 2 |
| `div.flex.flex-col` | column | — | center | 24px | 2 |
| `div.flex.flex-col` | column | — | — | 32px | 6 |
| `div.flex.flex-col` | column | — | — | 32px | 1 |
| `div.relative.flex` | column | — | — | 24px | 3 |
| `div.px-4.py-8` | column | — | — | 24px | 4 |
| `div.px-4.py-8` | column | — | — | 24px | 2 |
| `div.px-4.py-8` | column | — | — | 24px | 2 |
| `div.flex.flex-col` | column | — | — | 6px | 2 |
| `div.flex.gap-3` | row | — | — | 12px | 2 |

## Structural Containers

### `<main>` (`main.max-w-2xl.mx-auto`)

```
display:          block
max-width:        672px
children:         9
```

### `<header>` 

```
display:          block
children:         4
```

### `<footer>` (`footer.py-10.flex`)

```
display:          flex
flex-direction:   column
justify-content:  —
align-items:      center
gap:              12px
padding:          40px 0px
children:         2
```

### `<section>` (`section.px-4.py-8`)

```
display:          flex
flex-direction:   column
justify-content:  —
align-items:      —
gap:              16px
padding:          32px 16px
children:         2
```

### `<section>` (`section.px-4.py-8`)

```
display:          flex
flex-direction:   column
justify-content:  —
align-items:      —
gap:              32px
padding:          32px 16px
children:         2
```

### `<section>` (`section.px-4.py-8`)

```
display:          flex
flex-direction:   column
justify-content:  —
align-items:      —
gap:              32px
padding:          32px 16px
children:         2
```

### `<section>` (`section.px-4.py-8`)

```
display:          flex
flex-direction:   column
justify-content:  —
align-items:      —
gap:              32px
padding:          32px 16px
children:         2
```

### `<section>` 

```
display:          block
children:         2
```

### `<section>` 

```
display:          block
children:         2
```

### `<section>` 

```
display:          block
children:         2
```

## Layout Rules

- **Container max-width:** `672px` — always center with `margin: auto`
- Primary layout system: **Flexbox**
- Every spacing value must be a multiple of **4px**
- Never use arbitrary margin/padding values outside the spacing scale

