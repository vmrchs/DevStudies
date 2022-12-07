// React is DECLARATIVE, as opposed to Imperative.
// Declarative: "Just tell me what to do, and I'll worry about how I get it done"
// Imperative: "Describe to me every step on how tio do something, and I'll do it" (ex: vanilla JavaScript)

function MainContent() {
  return <h1>Main Content</h1>;
}

// a detail do keep in mind is that JSX can only render ONE parent element at a time
ReactDOM.render(
  // <ul>
  //   <li>Item 1</li>
  //   <li>Item 2</li>
  // </ul>,

  <div>
    <MainContent />
  </div>,

  document.getElementById("root")
);

// This is an Imperative way of creating a page, telling it step by step how to create an element.
const h1 = document.createElement("h1");
h1.textContent = "This is an imperative way of program";
h1.className = "header";

document.getElementById("root").appendChild(h1);

// Challenge 1
const navBar = (
  <nav>
    <h1>React Study Exercise</h1>
    <ul>
      <li>Pricing</li>
      <li>About</li>
      <li>Contact</li>
    </ul>
  </nav>
);

ReactDOM.render(navBar, document.getElementById("root"));
