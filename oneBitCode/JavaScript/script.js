let oldName = prompt("Digite o nome de uma pessoa mais velha: ")
let oldAge = prompt("Digite a idade dessa pessoa mais velha: ")

let youngName = prompt("Digite o nome de uma pessoa mais nova: ")
let youngAge = prompt("Digite a idade dessa pessoa mais nova: ")

let ageGap = oldAge - youngAge

alert(
    "Pessoa mais velha: " + oldName + "\nIdade: " + oldAge +
    "\n\nPessoa mais nova: " + youngName + "\nIdade" + youngAge +
    "\n\nDiferença de idade: " + ageGap + " anos."
)