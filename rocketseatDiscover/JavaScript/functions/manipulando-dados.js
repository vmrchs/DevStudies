/*
    Prototype

    * prototype-based language
    * prototype chain
    * __proto__

    Type conversion (typecasting) vs Type coercion

    * Alteração de um tiop de dado para outro

*/
// coercion
console.log("9" + 5)
// conversion
console.log(Number('9') + 5)

// Manipulando strings e números

// Transformar string em número e vice-versa
let string = "123"
console.log(Number(string))

let number = 321
console.log(String(number))

// Contar quantos caracteres tem uma palavra ou quantos dígitos tem um número
let word = "paralelepipedo"
console.log(word.length)

let numero = 1234
console.log(String(numero).length)

// Transformar um número quebrado com 2 casas decimais e trocar ponto por vírgula
let num = 420691989.9998777
console.log(num.toFixed(2).replace(".",","))

// Transforme letras minúsculas em maiúsculas e vice-versa
let frase = "Programar é muito bacana!"
console.log(frase.toUpperCase())

console.log(frase.toLowerCase())

// Separe um texto que contém espaços em um novo array onde cada texto ocupa uma posição do array. Depois disso, transforme o array em um texto, e onde haviam espaços, coloque _

let phrase = "Eu quero viver o Amor!"
let myArray = phrase.split(" ")
let phraseWithUnderScore = myArray.join("_")
console.log(phraseWithUnderScore)

// Verificar se o texto contém uma palavra específica

let exemplo1 = "Eu quero viver!"
console.log(exemplo1.includes("viver "))

// Criar Array com construtor

let anArray = new Array('a', 'b', 'c')
console.log(anArray)

// Contar elementos de um Array
console.log([
    "a",
    {type: "array"}, 
    function() { return "alo" },
].length)

console.log([
    "a",
    {type: "array"}, 
    function() { return "alo" },
][2]()) // rodar o elemento [2] como função

console.log([
    "a",
    {type: "array"}, 
    function() { return "alo" },
][1].type)

console.log(["a", "b", "c"].length)

// Transformar uma cadeia de caracteres em elementos de um array

let exemplo2 = "manipulação"
console.log(Array.from(exemplo2))