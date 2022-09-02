# Notes on JavaSript

## Modify Arrays
There are a few basic functions we can use to add and subtract elements from an array.

- push()
    Adds an element to the END of the array.

- pop()
    Removes the LAST element of the array.

- shift()
    Removes the FIRST element of the array.

- unshifit()
    Adds an element to the BEGINNING of the array.

## Variables

### Declaring Variables

### Scope

```javascript
var outerWear = "T-shirt"; //This variable is available Globally

function myOutfit() {
    var outerWear = "Sweater"; //This variable is only available within the myOutfit function

    return outerWear;
}

console.log(myOutfit()); //If we access the function, we get the local variable
console.log(outerWear); //But if we call the variable, it will reach to the one we declares globally
```

### Recursive Functions