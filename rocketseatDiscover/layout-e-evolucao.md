# Layouts e evolucao

Layout tem a ver com a maneira que os elementos estao distribuidos na tela

## Normal flow

Ou flow Layout é a maneira que os elementos `block` e `inline` ficamm na pagina

```HTML
<p> Texto bloc com <strong>inline</strong> dentro </p>
```

## Tables

Através do método de tabelas, a tag `table` recebe um display `table`,
fazendo com que os elmentos internos como `td` e `tr` possam ser usados para 
montar uma tabela

```HTML
<table>
    <tr>
        <td> Hora </td>
        <td> 20:00 </td>
    </tr>
    <tr>
        <td> Hora </td>
        <td> 20:00 </td>
    </tr>
</table>
```

## Tabless

Uso das propriedades `float`, `clear` para que os elementos possam mudar de posicao na tela

```HTML
<div style="float: left">
    ESQUERDA
</div>

<div style="float: right">
DIREITA
</div>

<div style="clear:both">
    Normal
</div>
```
## Flexbox

A caixa se torna flex, fazendo com que os elementos internos possam receber melhor:

- Alinhamento
- Ordenacao
- Tamanhos flexiveis
