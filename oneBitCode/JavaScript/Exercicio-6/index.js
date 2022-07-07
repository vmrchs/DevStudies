let warpCount = 0

let shipName = prompt("Insira o nome da nave: ")

let warpConfirm = confirm("Deseja entrar em dobra espacial?")

while (warpConfirm == true) {
    warpCount += 1
    warpConfirm = confirm("Deseja realizar a próxima dobra?")
}

alert("Nave: " + shipName + "\nQuantidade de dobras: " + warpCount)