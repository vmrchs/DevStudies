# Margin

Espaço entre os elementos

- margin top | margin right | margin bottom | margin left
- values: `<length>`| `<percentage>` | auto

```css
div {
    /* shorthand */
    margin: 12px 16px 10px 4px;
    margin: 12px 16px 0;
    margin: 8px 16px;
    margin: 8px;
}
```

*Cuidado com margin collapsing (top se junta ao bottom)*

https://developer.mozilla.org/en-US/docs/Web/CSS/margin