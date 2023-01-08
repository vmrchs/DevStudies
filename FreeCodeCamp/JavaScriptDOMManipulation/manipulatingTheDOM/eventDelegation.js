// Event Delegation

document.querySelector("#sports").addEventListener("click", function (e) {
  console.log(e.target.getAttribute("id") + "is clicked");

  const target = e.target;

  if (target.matches("li")) {
    target.style.backgroundColor = "lightgrey";
  }
});

const sports = document.querySelector("#sports");
const newSport = document.createElement("li");

newSport.innerText = "rugby";
newSport.setAttribute("id", "rugby");

sports.appendChild(newSport);

// document.querySelector("#football").addEventListener("click", function () {
//   console.log("football is clicked");

//   const target = e.target;

//   if (target.matches("li")) {
//     target.style.backgroundColor = "lightgrey";
//   }
// });

// document.querySelector("#basketball").addEventListener("click", function () {
//   console.log("basketball is clicked");

//   const target = e.target;

//   if (target.matches("li")) {
//     target.style.backgroundColor = "lightgrey";
//   }
// });

// document.querySelector("#boxing").addEventListener("click", function () {
//   console.log("boxing is clicked");

//   const target = e.target;

//   if (target.matches("li")) {
//     target.style.backgroundColor = "lightgrey";
//   }
// });

// document.querySelector("#tennis").addEventListener("click", function () {
//   console.log("tennis is clicked");

//   const target = e.target;

//   if (target.matches("li")) {
//     target.style.backgroundColor = "lightgrey";
//   }
// });

// document.querySelector("#golf").addEventListener("click", function () {
//   console.log("golf is clicked");

//   const target = e.target;

//   if (target.matches("li")) {
//     target.style.backgroundColor = "lightgrey";
//   }
// });
