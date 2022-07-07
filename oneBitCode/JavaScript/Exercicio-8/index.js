let spaceshipName = prompt("Nome da nave: ")

let invertedName = ""

for (let i = spaceshipName.length - 1; i >= 0; i--) {
    if (spaceshipName[i] == "e" || spaceshipName[i] == "E") {
        break
    }
    invertedName += spaceshipName[i]
}

alert("Nome original da nave: " + spaceshipName + "\nNome após ocultação: " + invertedName)