// if ... else

let temperature = 36.5
let highFever = temperature >= 37.5
let mildFever = temperature < 37.5 && temperature >= 37

if(highFever) {
    console.log('Tá com febre alta')
} else if ( mildFever) {
    console.log('Tá com febre modrada')
} else {
    console.log('Temperatura normal')
}


