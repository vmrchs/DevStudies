const root = document.getElementById("root");

// const pageContent = (
function PageContent() {
  return (
    <div>
      <img src="./img/React-icon.png" alt="React Logo" width="60px" />
      <h1>Fun facts about React</h1>
      <ul>
        <li>Trace amounts of feces</li>
        <li>Was first released in 2013.</li>
        <li>Was originally created by Jordan Walke.</li>
        <li>Has well over 100k stars on Github.</li>
        <li>Powers thousands of enterprise apps, including mobile.</li>
      </ul>
    </div>
  );
}
// );

ReactDOM.render(<PageContent />, root);
