# Seletores
 
Conecta um elemento HTML com o CSS a fim de alterar o elemento

## Tipos

* Element Selector
    - Todos os elementos HTML.
* ID Selector
    - Um elemento que tenha um atributo `id`.
    - Cada id devera ser unico.
* Class Selector
    - Os elementos que contenham um atributo `class`.
    - Podemos ter uma ou mais classes.
* Attribute Selector
    - Um elemento que tenha um atributo especifico.
* Pseudo-class Selector
    - Elementos em um estado especifico. 

 ## Multiples

 Voce podera selecionar multiplos elementos e aplicar alguma regra CSS para todos eles.

 Usamos uma separacao por virgular para isso.

 ```css
 h1, p, a {
     color: red;
 }
 ```