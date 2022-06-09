import React from "react";
import { Link } from "react-router-dom";

function Products() {
  return (
    <div className="page__content">
      <h1>Products</h1>
      <p>We will add some products. Later... &#128519;</p>
      <Link to="/contacts">Contacts</Link>
    </div>
  );
}

export default Products;
