// Event Propagation

window.addEventListener(
  "click",
  function () {
    console.log(window);
  },
  true // false by default, influences the order console will log the bubbling
);

document.addEventListener(
  "click",
  function () {
    console.log("Document");
  },
  true
);

document.querySelector(".div2").addEventListener(
  "click",
  function (e) {
    // e.stopPropagation();
    console.log("DIV 2");
  },
  { once: true }
);

document.querySelector(".div1").addEventListener(
  "click",
  function () {
    console.log("DIV 1");
  },
  true
);

document.querySelector("button").addEventListener(
  "click",
  function (e) {
    e.preventDefault();
    console.log((e.target.innerText = "clicked!"));
  },
  true
);
