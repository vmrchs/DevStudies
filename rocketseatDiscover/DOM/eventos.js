// Eventos
// https://developer.mozilla.org/pt-BR/docs/Web/API/GlobalEventHandlers

// onclick

// onkeypress

// IMPORTANTE
// PARA EMPILHAR FUNÇÕES
//addEventListener

// argumento event
const input = document.querySelector('input')

input.onkeydown = function(event) {
    console.log(event.currentTarget.value)
}