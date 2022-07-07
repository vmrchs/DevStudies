const button = document.getElementById('openModal')
const modalWrapper = document.querySelector('.modal-wrapper')

button.onclick = function() {
    if(modalWrapper.classList.contains('invisible'))
    modalWrapper.classList.toggle('invisible')
}

document.addEventListener('keydown', function(event) {
    const isEscKey = event.key === 'Escape'

    if(isEscKey && !modalWrapper.classList.contains('invisible')) {
        modalWrapper.classList.toggle('invisible')
    }
})