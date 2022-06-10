import React from "react";

function Product({ match }) {
  return <div className="page__content">{match.params.productId}</div>;
}

export default Product;
