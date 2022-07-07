// Manipulando Arrays

let techs = ["html", "css", "js"]

// adicionar um item no fim
techs.push("nodejs")

// adicionar item no começo
techs.unshift("sql")

// remover um item do final
techs.pop()

// remover um item do começo
techs.shift()

//pegar somente alguns elementos do Array
//console.log(techs.slice(1, 3))

// remover 1 ou mais itens em qualquer posição do Array (index, quant)
techs.splice(1, 1)

// encontrar a posição de um elemento detro do Array
let index = techs.indexOf('js')
console.log(index)

let index = techs.indexOf('js')
techs.splice(index, 1)
console.log(techs)