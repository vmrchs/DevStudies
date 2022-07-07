let distanceInLY = prompt("Digite aqui uma distancia em anos-luz")

let chosenOption = prompt("Para qual unidade deseja converter? \n1. Parser (pc) \n2. Unidade Astronômica (AU) \n3. Quilômetros (km) \n\n(Digite o número da opção desejada)")

let chosenUnit
let convertedDistance

switch (chosenOption) {
    case "1":
        chosenUnit = "Parsec"
        convertedDistance = distanceInLY * 0.306601
        break
    case "2":
        chosenUnit = "Unidade Astronômica"
        convertedDistance = distanceInLY * 63241.1
        break
    case "3":
        chosenUnit = "Quilômetros"
        convertedDistance = distanceInLY * 9.5 * Math.pow(10, 12)
        break
    default:
        chosenUnit = "Unidade não identificada"
        convertedDistance = "Conversão fora do escopo"
}

alert("Distância em Anos-luz" + distanceInLY + "\n" + chosenUnit + ": " + convertedDistance)