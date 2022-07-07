// throw
    function sayMyName(name) {
        if (name === '') {
            throw new Error("Nome é obrigatório")
        }
        console.log ('depois do erro')
    }
// try ... catch
try {
    sayMyName()
} catch(e) {
    console.log(e)
}