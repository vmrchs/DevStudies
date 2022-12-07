const root = document.getElementById("root");

const menu = (
  <div>
    <h1>Bob's Delicious Burgers</h1>
    <h3>Pick your favorite and soon it will be ready for you.</h3>
    <ul>
      <li>
        Hamburger - <span>$5</span>
      </li>
      <li>
        Cheeseburger - <span>$5.50</span>
      </li>
      <li>
        Fries - <span>$5</span>
      </li>
    </ul>
  </div>
);

// root.appendChild(menu)
// ReactDOM.render(JSON.stringify(menu), root);
ReactDOM.render(menu, root);
