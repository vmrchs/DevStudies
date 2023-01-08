// Event Listeners

const buttonTwo = document.querySelector(".btn-2");

function alertBtn() {
  alert("I love JavaScript!");
}

buttonTwo.addEventListener("click", alertBtn);

// Mouseover

const newBackgroundColor = document.querySelector(".box-3");

function changeBgColor() {
  newBackgroundColor.style.backgroundColor = "blue";
}

newBackgroundColor.addEventListener("mouseover", changeBgColor);

// Reveal Event

const revealBtn = document.querySelector(".reveal-btn");

const hiddenContent = document.querySelector(".hidden-content");

revealBtn.addEventListener(
  "click",
  hiddenContent.classList.toggle("reveal-btn")
);
