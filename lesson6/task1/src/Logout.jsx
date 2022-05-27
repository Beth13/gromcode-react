import React from "react";

const IsLogout = (props) => {
  const { onLogout } = props;

  return (
    <button className="btn logout" onClick={onLogout}>
      Logout
    </button>
  );
};

export default IsLogout;
