import React from "react";
import ReactDOM from "react-dom";
import Header from "./Header.js";

const root = document.querySelector("#root");

// function Header() {
//   return (
//     <header>
//       <nav className="nav">
//         <img src="./React-icon.png" className="nav-img" />
//         <ul className="nav-items">
//           <li>Pricing</li>
//           <li>About</li>
//           <li>Contact</li>
//         </ul>
//       </nav>
//     </header>
//   );
// }

function MainContent() {
  return (
    <main className="main-content">
      <h1>Challenge 2</h1>
      <h2>Reasons I'm excited to learn React:</h2>
      <ol>
        <li>It's current</li>
        <li>It's employable</li>
        <li>It's a logical next step coming from JavaScript</li>
      </ol>
    </main>
  );
}

function Footer() {
  return (
    <footer className="footer">
      © 2022 Marchisio Development. All rights reserved.
    </footer>
  );
}

function PageChallenge() {
  return (
    <div className="container">
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}

ReactDOM.render(<PageChallenge />, root);
