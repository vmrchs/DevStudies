# Box Model
 
 - Fundamental para fazer layouts para web
 - Maior facilidade para aplicar o CSS

 ## O que é?

 Uma caixa retangular
 Essa caixa possui propriedades de uma caixa 2D

 - Tamanho (largura x altura)       width   |   height
 - Conteúdo                         content
 - Bordas                           border
 - Preenchimento interno            padding
 - Espaços fora da caixa            margin

 *Cada elemento na sua página, será considerado uma caixa.*

## box-sizinfg

Como será calculato o tamanho total da caixa?

- content-box | border-box

```css
div {
    box-sizing: border-box;
}
```