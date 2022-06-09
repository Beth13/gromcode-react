import React from "react";
import { Link } from "react-router-dom";

function Contacts() {
  return (
    <div className="page__content">
      <h1>Contacts</h1>
      <p>We are here &#127757;</p>
      <Link to="/">Go home</Link>
    </div>
  );
}

export default Contacts;
