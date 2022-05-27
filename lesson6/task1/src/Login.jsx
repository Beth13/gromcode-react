import React from "react";

const IsLogin = (props) => {
  const { onLogin } = props;

  return (
    <button className="btn login" onClick={onLogin}>
      Login
    </button>
  );
};

export default IsLogin;
