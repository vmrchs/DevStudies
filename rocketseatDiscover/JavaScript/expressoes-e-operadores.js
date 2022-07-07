/* Expressões e Operadores

- Expressions
- Operators
    * Binary
    * Unary
    * Ternary
*/

let number = 1;

(function() {
    console.log('alo')
})()


// Binários, conecta 2 expressões
console.log(++number)

console.log(--number)

// Unário, atua sobre 1 expressões
console.log(typeof number)

//Ternário -- usa 3 expressões
console.log(false ? 'alo' : 'nada')

// OPERADORES UNÁRIOS - typeof e delete
const person = {
    name: "Vinnie",
    age: 32,
}

delete person.age

console.log(person)