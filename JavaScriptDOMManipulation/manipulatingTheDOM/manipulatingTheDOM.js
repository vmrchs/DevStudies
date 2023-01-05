// DOM Manipulation

// GetElementById()

const title = document.getElementById("main-heading");

// GetElementByClassName()

// const listItem = document.getElementsByClassName("list-items");

// getElementsByTagName

const listItems = document.getElementsByTagName("li");

// querySelector()

const ul = document.querySelector("ul");

// querySelectorAll()

const container = document.querySelectorAll("div");

console.log(title);
console.log(listItems);
console.log(container);

// Styling Elements with DOM Manipulation

title.style.color("red"); // only works with single elements due to the style being applied inline

for (i = 0; i < listItems.length; i++) {
  listItems[i].style.fontSize = "5rem"; // to add to multiple elements, you have to iterate through them with a loop
}

// Creating Elements

const li = document.createElement("li");

ul.append(li);

// Modifying the text in the Element

const firstListItem = document.querySelector(".list-item");

console.log(firstListItem.innerText); // preferable use
console.log(firstListItem.textContent);
console.log(firstListItem.innerHTML); // this one might compromise security

li.innerText = "Fast & Furious";

// Modifying Attributes & Classes

li.setAttribute("id", "main-heading");
li.removeAttribute("id");

li.classList.add("list-item");

console.log(li.classList.contains("list-items"));
