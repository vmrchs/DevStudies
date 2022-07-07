let spaceshipName = prompt("Insira o nome da nave: ")

let letterToRemove = prompt("Qual letra gostaria de substituir?")

let letterToAdd = prompt("Qual letra gostaria de colocar no lugar?")

let newSpaceshipName = ""

for (i = 0; i < spaceshipName.length; i++) {
    if (spaceshipName[i] == letterToRemove) {
        newSpaceshipName += letterToAdd
    } else {
        newSpaceshipName += spaceshipName[i]
    }
}

alert("O novo nome da nave é: " + newSpaceshipName)