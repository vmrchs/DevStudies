# Page Layouts

- Tables
- Floats e clear
- Framework e Grid Systems
- Flexbox
- Grid

## Posicionamentos

Controlar onde, na página, o elemento irá ficar,
alterando o fluxo normal dos elementos.

- Name: position
- Value: static | relative | absolute | fixed

### static

Por padrão os elementos são static. Isso significa que os elementos irão seguir o fluxo normal do HTML.

### relative

O position indica onde o elemento vai ser posicionado na página. Ao usar o position podemos adicionar outras propriedades como top, right, bottom, left e z-index, que vão determinar o posicionamento final do elemento.

Quando o position é relative os elementos são deslocados do seu posicionamento normal, mas sem afetar o posicionamento de outros elementos da página.

https://app.rocketseat.com.br/node/posicionando-foguetes/lesson/relative

### absolute

Quando o position é absolute o elemento é deslocado saindo do fluxo normal. O elemento de position absolute é posicionado em relação ao seu parent element mais próximo. Se esse elemento "pai" não existir, ele será posicionando em relação ao bloco contendo a raiz do elemento.

### fixed

Quando aplicado o position fixed é como se criasse um elemento flutuante que fica fixo na página, independente do scrolling feito.

### Element Stacking

É o empilhamento de elementos. Podemos usar o z-index para determinar a ordem da posição do elemento. Quanto maior o z-index, mais "acima" vai aparecer o elemento.