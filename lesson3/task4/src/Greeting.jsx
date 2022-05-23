import React from "react";

const dateRender = (birthDate, nowDate) => {
  return (
    (nowDate.getTime() - birthDate) /
    (24 * 3600 * 365.25 * 1000)
  ).toFixed();
};

const Greeting = (props) => {
  return (
    <div className="greeting">{`My name is ${props.firstName} ${
      props.lastName
    }. I'm ${dateRender(props.birthDate, new Date())} years old`}</div>
  );
};

export default Greeting;
