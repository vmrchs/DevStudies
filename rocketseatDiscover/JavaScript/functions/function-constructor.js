/*
    Function() constructor
    
    * expressão new
    * criar um novo objeto
    * this keyword
    
*/

function Person(name) {
    this.name = name
    this.walk = function() {
        return this.name + ' está andando.'
    }
}
const vinnie = new Person('Vinnie')
const mayk = new Person('Mayk')
console.log(mayk.walk())
console.log(vinnie.walk())
