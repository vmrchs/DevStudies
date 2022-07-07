function doChange() {
    alert(event.target.value)
}
// selecionando o elemento
let sampleInput = document.querySelector("input[name='sample-input']")
// adicioando o evento change através do javascript - addEventListener("evento adcionado", função chamada através do objeto)
sampleInput.addEventListener("change", doChange)
// criar um objeto que recebe o nome do evento a ser criado
let changeEvent = new Event("change")
// para disparar este evento no elemento, usamos dispatchEvent(objeto do tipo event)
sampleInput.dispatchEvent(changeEvent)
// tambem podemos remover um evento mapeado para uma função
// sampleInput.removeEventListener("change", doChange)