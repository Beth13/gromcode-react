/* eslint-disable no-undef */

// put your code here

const rootElement = document.querySelector("#root");

const greetingElem = React.createElement(
  "div",
  { className: "greeting" },
  "Hello, React!"
);

ReactDOM.render(greetingElem, rootElement);
