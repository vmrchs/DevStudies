// Manipulando Arrays

let techs = ["html", "css", "js"]

// adicionar um item no fim
techs.push("nodeJS")
// adicionar um item no começo
techs.unshift("SQL")
// remover um item do fim
//techs.pop()
// remover um item do começo
//techs.shift()
// pegar somente alguns elementos do array
//console.log(techs.slice(1, 3))
// remover 1 ou mais itens de qualquer posição do array
// techs.splice(1, 1)  // (indice do elemento, quantidade de elementos)
// encontrar a posição de um elemento no array
let index = techs.indexOf('css')

console.log(index)