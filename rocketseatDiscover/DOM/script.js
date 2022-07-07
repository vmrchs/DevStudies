// getElementById() - Element

document.getElementById('blog-title')

// getElementsByClassName() - HTMLCollection
let element = document.getElementsByClassName('one')
console.log(element)

// getElementsByTagName() - HTMLCollection

let element2 = document.getElementsByTagName('h1')
console.log(element2)

// querySelector() - Element

// let element3 = document.querySelector('[src]')
let element3 = document.querySelector('.one')
console.log(element3)

// queroSelectorAll() - Node List - Possibilita a utilização de funções como .forEach

let element4 = document.querySelectorAll('.one')
console.log(element4)


// Manipulando conteúdo
// textContent
const exemplo = document.querySelector('h1')
exemplo.textContent += " Dos Infernos"
console.log(exemplo.textContent)

// innetText
const ex = document.querySelector('#p')
ex.innetText = "Fazendo arte na Web"
console.log(ex.innerText)

// MANIPULANDO CONTEUDOS
// innerHTML
// sempre que o conteúdo conter tags HTML

// value

// Atributos
// setAttribute
// removeAttribute

// MANIPULANDO ESTILOS E CLASSES
// style
// classList - classList.add() - classList.remove() - classList.toggle()

// NAVEGANDO PELOS ELEMENTOS
// parentElement
// parentNode

// childNodes
// children

// firstChild - firstElementChild

// lastChild - lastElementChild

// nestSibling - nextElementSibling

// previousSibling - previousElementSibling

// CRIANDO E ADICIONANDO ELEMENTOS NA PAGINA
// createElement
// append - perpend

// insertBefore 
// Nao existe insertAfter - hack: body.insertBefore(novoElement, elementoRef.nextSibling)



