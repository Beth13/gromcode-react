import React from "react";
import { Link } from "react-router-dom";

function PageNotFound() {
  return (
    <div className="page__content">
      <h1>404 &#128549;</h1>
      <Link to="/">Go home</Link>
    </div>
  );
}

export default PageNotFound;
