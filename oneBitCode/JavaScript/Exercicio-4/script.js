let pilotName = prompt("Insira seu nome: ")
let speed = 0

let newSpeed = prompt("Insira a velocidade desejada: ")

let confirmSpeed = confirm("Deseja acelerar a uma velodidade de " + newSpeed + "km/s?")

if (confirmSpeed) {
    speed = newSpeed
}


if (speed == 0) {
    alert("A nave está parada. Considere aumentar a velocidade para partir.")
} else if (speed > 0 && speed < 40) {
    alert("Você está devagar, podemos aumentar a velocidade.")
} else if (speed >= 40 && speed < 80) {
    alert("Parece uma boa velocidade para mantermos.")
} else if (speed >= 80 && speed < 100) {
    alert("Velocidade alta. Considere reduzir.")
} else if (speed >= 100) {
    alert("Velocidade perigosa. Controle automático forçado.")
} else {
    alert("ERRO!")
}

alert(pilotName + ", nossa velocidade atual é de " + speed + " km/s.")