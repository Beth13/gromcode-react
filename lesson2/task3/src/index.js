import "./index.css";
import React from "react";
import ReactDOM from "react-dom";

const rootElem = document.querySelector("#root");

const renderSeconds = (time) => {
  const seconds = new Date(time).getSeconds();
  const backgroundColor = seconds % 2 === 0 ? "#fff" : "#000";
  const textColor = seconds % 2 !== 0 ? "#fff" : "#000";
  const styles = {
    color: textColor,
    backgroundColor,
  };

  const element = (
    <div className="seconds" style={styles}>
      Now is {seconds}
    </div>
  );

  ReactDOM.render(element, rootElem);
};

// renderSeconds(new Date());

setInterval(() => renderSeconds(new Date()), 1000);
