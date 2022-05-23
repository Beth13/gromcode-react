import "./index.scss";
import React from "react";
import ReactDOM from "react-dom";
import Greeting from "./Greeting.jsx";

const rootElem = document.querySelector("#root");

ReactDOM.render(
  <Greeting
    firstName="John"
    lastName="Doe"
    birthDate={new Date(2019, 11, 31)}
  />,
  rootElem
);
