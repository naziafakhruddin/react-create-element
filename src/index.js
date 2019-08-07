import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

/* 

const title = React.createElement(
  "h1",
  { id: "main-title", title: "This is a title" },
  "My Firest React Element!"
);

const desc = React.createElement(
  "p",
  null,
  "I just learned how to create a React node and render it into the DOM."
);

*/

const desc =
  "I just learned how to create a React node and render it into the DOM.";
const myTitleID = "main-title";
const name = "Guil";
//const header = React.createElement("header", null, title, desc);

const header = (
  <header>
    <h1 id={myTitleID}>{name}'s Firest React Element</h1>
    <p className="main-desc">{desc}</p>
    {/* <input value={10 * 20} /> 
      
       */}
  </header>
);

//console.log(title);

function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}

const rootElement = document.getElementById("root");
//ReactDOM.render(<App />, rootElement);

ReactDOM.render(header, rootElement);
