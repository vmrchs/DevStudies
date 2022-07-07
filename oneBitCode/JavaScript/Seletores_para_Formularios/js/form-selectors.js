function showInfo() {
    // selecionando o input text
    let name = document.querySelector("input[name='name']").value
    // selecionando da lista
    let favoriteColor = document.querySelector("select[name='color'] option:checked").text
    // selecionando do radio button
    let likesProgramming = document.querySelector("input[name='likes-programming']:checked").value
    // selecionando da checklist
    let developerOptions = document.querySelectorAll("input[name='developer-options']:checked")
    // criando um array vazio para armazenar os itens checked
    let optionsValue = []
    // percorrendo as opções e armazenando o value no array vazio criado acima
    developerOptions.forEach(element => { optionsValue.push(element.value) })
    // unindo o array para formar uma string
    let optionsChecked = optionsValue.join(", ")
    // exibindo as informações coletadas do form
    alert("Nome: " + name + "\nCor primária: " + favoriteColor + "\nGosta de programar? " + likesProgramming + "\nConhecimentos em programação web: " + optionsChecked)
}