function sayMyFirstName(element) {
    alert("Meu primeiro nome é " + element.value)
}

function sayMyLastName(event) {
    console.log(event)
    alert("Meu sobrenome é " + event.target.value)
}