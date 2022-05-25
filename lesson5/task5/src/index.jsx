import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import Toggler from "./Toggler.jsx";

const rootElem = document.querySelector("#root");

ReactDOM.render(<Toggler text="Off" />, rootElem);
