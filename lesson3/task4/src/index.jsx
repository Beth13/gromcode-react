import "./index.scss";
import React from "react";
import ReactDOM from "react-dom";
import Greeting from "./Greeting.jsx";

const rootElem = document.querySelector("#root");

const dateRender = (birthDate, nowDate) => {
  return ((nowDate.getTime() - birthDate) / (24 * 3600 * 365.25 * 1000)) | 0;
};

ReactDOM.render(
  <Greeting
    firstName="John"
    lastName="Doe"
    birthDate={dateRender(new Date(2019, 11, 31), new Date(2020, 0, 1))}
  />,
  rootElem
);
