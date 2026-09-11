# Layout Reference

> Auto-extracted from live DOM. Use this to understand how the site is structured spatially.

## Spacing System

**Base grid:** 4px

**Scale:** `2, 4, 6, 8, 10, 12, 14, 16, 20, 24, 26, 32, 40, 48, 64` px

| Spacing | Semantic Use |
|---------|-------------|
| 4px | Tight — within a component |
| 8px | Medium — between sibling items |
| 16px | Wide — between sections |
| 32px | Vast — major section breaks |

## Flex Layouts

| Element | Direction | Justify | Align | Gap | Children |
|---------|-----------|---------|-------|-----|----------|
| `div.relative.z-10` | column | — | — | 80px | 3 |
| `main#main-content.flex.flex-col` | column | — | — | 80px | 3 |
| `header.flex.items-center` | row | space-between | center | — | 2 |
| `footer.flex.flex-col` | column | — | — | 24px | 1 |
| `section.flex.flex-col` | column | — | — | 64px | 2 |
| `section.flex.flex-col` | column | — | — | 24px | 2 |
| `div.flex.flex-col` | column | — | — | 16px | 3 |
| `div.flex.flex-col` | column | — | — | 24px | 2 |
| `div.flex.flex-col` | column | — | — | 24px | 2 |
| `div.flex.flex-col` | column | — | — | — | 2 |
| `div.flex.flex-col` | column | — | — | — | 3 |
| `a.group.flex` | row | — | center | 12px | 3 |
| `a.group.flex` | row | — | center | 12px | 3 |
| `a.group.flex` | row | — | center | 12px | 3 |
| `a.group.flex` | row | — | center | 12px | 3 |

## Structural Containers

### `<main>` (`main#main-content.flex.flex-col`)

```
display:          flex
flex-direction:   column
justify-content:  —
align-items:      —
gap:              80px
children:         3
```

### `<header>` (`header.flex.items-center`)

```
display:          flex
flex-direction:   row
justify-content:  space-between
align-items:      center
padding:          0px 0px 32px
children:         2
```

### `<footer>` (`footer.flex.flex-col`)

```
display:          flex
flex-direction:   column
justify-content:  —
align-items:      —
gap:              24px
padding:          32px 0px 0px
children:         1
```

### `<section>` (`section.flex.flex-col`)

```
display:          flex
flex-direction:   column
justify-content:  —
align-items:      —
gap:              64px
children:         2
```

### `<section>` (`section.flex.flex-col`)

```
display:          flex
flex-direction:   column
justify-content:  —
align-items:      —
gap:              24px
children:         2
```

## Layout Rules

- Primary layout system: **Flexbox**
- Every spacing value must be a multiple of **4px**
- Never use arbitrary margin/padding values outside the spacing scale

