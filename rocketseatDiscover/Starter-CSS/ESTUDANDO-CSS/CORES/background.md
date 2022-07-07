# Background

- Define um fundo para o nosso elemento
- Sua área de atuação é a caixa toda
- por padrão, é transparente

## Exemplos

- Usar cores sólidas
- Usar Imagens
- Controlar:
    - a posição das imagens
    - se elas se repetem ou não
    - o tamanho dela na caixa
- Usar cor e imagem juntas
- Usar cor gradiente

```css
header {
    background-color: <color>;

    /* background-repeat Values */
    background-repeat: repeat-x;
    background-repeat: repeat-y;
    background-repeat: repeat;
    background-repeat: space;
    background-repeat: round;
    background-repeat: no-repeat;

    /* Podedmos usar 2 valores: horizontal | vertical */
    background-repeat: repeat space;
    background-repeat: repeat repeat;
    background-repeat: round space;
    background-repeat: no-repeat round;
    
    /* Com a propriedade background-position podemos mudar a posição da imagem do background */
    background-position: top;
    background-position: bottom;
    background-position: left;
    background-position: right;
    background-position: center;

    /* background-size Values */
    background-size: cover;
    background-size: contain;

    /* Podemos usar 2 valores, o primeiro é para a largura da imagem e o segundo é para a altura */
    background-size: 40% auto;
    background-size: 2em 25%;
    background-size: auto 8px;
    background-size: auto auto;

    /* A propriedade background-origin é quem define o ponto de origem de uma imagem específica. */
    /* Principais valores */
    background-origin: border-box;
    background-origin: padding-box;
    background-origin: content-box;

    /* O background-clip define se a cor ou imagem do background iniciam debaixo de sua área de borda, preenchimento ou conteúdo. */
    /* Principais valores */
    background-clip: border-box;
    background-clip: padding-box;
    background-clip: content-box;
    background-clip: text;

    /* A propriedade background-attachment determina se a posição da imagem vai ser fixa ou se vai rolar junto com o conteúdo. */
    /* Principais valores */
    background-attachment: scroll;
    background-attachment: fixed;
    background-attachment: local;

    /* exemplo shorthand */
    background: url("https://mdn.mozillademos.org/files/11983/starsolid.gif") #00D repeat-y fixed; 
    /* ordem: color image repeat position size origin clip attachment */

    /* linear-gradient() é a função usada para criar gradient linear com o CSS. */
    background: linear-gradient(45deg, red, yellow);

    /* radial-gradient() é a função usada para criar gradient circular. */
    background: radial-gradient(green, red, yellow);
    background: radial-gradient(rgba(255, 255, 255, 0), rgba(255, 0, 0, 0.2));

    /* Podemos aplicar múltiplos backgrounds em um mesmo elemento, podendo ter cor sólida, gradiente ou imagem. Para isso basta separar por vírgula cada background. */
    
    /* EX: https://app.rocketseat.com.br/node/agora-sim-cores/group/background/lesson/multiplos-valores */
}

```

https://developer.mozilla.org/pt-BR/docs/Web/CSS/background
