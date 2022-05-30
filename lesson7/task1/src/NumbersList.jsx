import React from "react";

const NumbersList = (props) => {
  const { numbers } = props;

  return (
    <ul>
      {numbers.map((num) => (
        <li key={num}>{num}</li>
      ))}
    </ul>
  );
};

export default NumbersList;
