// switch
let expression = 'a' // ou 'b' ou qualquer outra string que será tratada como 'default'

switch (expression) {
    case 'a':
        //codigo
        console.log('a')
        break // importante para que os casos sejam tratados individualmente
    case 'b':
        //código para 'b'
        console.log('b') 
        break
    default:
        console.log('default')
        break
}

// EXEMPLO: Calculadora

function calculate(number1, operator, number2) {
    let result

    switch(operator) {
        case '+':
            result = number1 + number2
            break
        case '-':
            result = number1 - number2
            break
        case '*':
            result = number1 * number2
            break
        case '/':
            result = number1 / number2
            break
    }
}

console.log(calculate(4, '+', 8))
console.log(calculate(4, '-', 8))
console.log(calculate(4, '*', 8))
console.log(calculate(4, '/', 8))
console.log(calculate(4, '%', 8))