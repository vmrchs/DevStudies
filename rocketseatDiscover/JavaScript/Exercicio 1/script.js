// 1. Declare uma variável de nome weight

// 2.  Que tipo de variável weight é?

/*
    3. Declare uma variável e atribua valores para cada um dos dados
        * name: String
        * age: Number (integer)
        * stars: Number (float)
        * isSubscribed: Boolean

*/

// 1.
    var weight;

// 2.
    // undefined
    console.log(typeof weight)

// 3.
    let subs = {
        name: "Mayk",
        age: 23,
        stars: 4.5,
        isSubscribed: true
    } 
/*

    4. A variável student abaixo é que tipo de dados?

    4.1 Atribua a ela as mesmas propriedades e valores do exercício 3.

    4.2 Mostre no console a seguinte mensagem

        <name> de idade <age> pesa <weight> kg.

        Atenção, substitua <name> <age> e <weight> pelos valores de cada propriedade do objeto.

*/

let student = {
    name: "Vinnie",
    age : 32,
    weight: 62,
    stars: 1.5,
    isSubscribed: false
}

// console.log(`${student.name}, de idade ${student.age}, pesa ${student.weight} kg.`)

/* 
    5. Declare uma variável do tipo Array, de nome students e atribua a ela nenhum valor, ou seja, somente o Array vazio
*/

var students = []

/*
    6. Reatribua valor para a variável acima, colocando dentro dela o objeto student da questão 4 (não copiar e colar o objeto, mas uasr o objeto criado e inserir ele no Array)
*/

students = [
    student
]

console.log(students)

/*
    7. Coloque no console o valor da posição zero do Array acima
*/

console.log(students[0])

/*
    8. Crie um novo student e coloque na posição 1 do Array Students

*/

const john = {
    name: 'John',
    age: 29,
    weight: 88.7,
    isSubscribed: true
}

/* students = [
    student,
    john
] */
 //console.log(students[1])

 students[1] = john

 console.log(students)

 /*
    9. Sem rodar o código, responda qual é a resposta do código abaixo e por que? Após sua resposta, rode o código e veja se você acertou.

    console.log(a)
    var a = 1
*/

// undefinder. por conta do hoisting ele roda como se fosse

var a
console.log(a)
a = 1