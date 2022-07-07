// for ... in

let person = {
    name: 'John',
    age: 30,
    weight: 70.5
}

for(let property in person) {
    console.log(property)
    console.log(person[property])
}