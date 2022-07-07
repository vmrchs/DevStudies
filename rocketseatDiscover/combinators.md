# Combinators

Combinadores, pois eles trabalham para buscar e combinar seletores a fim de aplicar uma estilizacao.

## Descendant Combinator

* Identificado por um espaco entre os seletores.
* Busca um elemento dentro de outro

```css
body article h2 {}
```

## Child Combinator

* Identificado pelo sinal `>` entre dois seletores
* Seleciona somente o elemento que seja filho direto do pai
* Elementos depois do filho direto serao considerados

```css
body > ul > li {}
```

## Adjacent Sibling Combinator

* Identificado pelo sinal `+` entre dois seletores
* Seleciona somente o elemento do lado direto que seja irmao direto/adjascente na hierarquia

```css
h1 + p {}
```

## Utilizando Combinators

```css
ul > li[class="red"] {}
```

## DICA

* Seletores muito especificos tendem a causar dificuldades no reuso das regras de estilizacao dos elementos.
* Muitas vezes, um simples uso de classes torna o trabalho muito mais eficiente.