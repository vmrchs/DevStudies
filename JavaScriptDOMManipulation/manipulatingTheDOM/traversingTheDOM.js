// Traversing the DOM

// Parent Node Traversal

let ul = document.querySelector("ul");

console.log(ul.parentNode);
console.log(ul.parentElement);

const html = document.documentElement;

console.log(html.parentNode);
console.log(html.parentElement);

// Child Node Traversal

console.log(ul.childNodes);
console.log(ul.firstChild);
console.log(ul.lastChild);

ul.childNodes[1].style.backgroundColor = "blue";

// Sibling Node Traversal

console.log(ul.previousSibling);
console.log(ul.nextSibling);

console.log(ul.previousElementSibling);
console.log(ul.nextElementSibling);
