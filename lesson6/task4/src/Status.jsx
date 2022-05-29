import React from "react";
import Online from "./Online.jsx";
import Offline from "./Offline.jsx";

const Status = (props) => {
  const { isOnline } = props;

  if (isOnline) {
    return <Online />;
  }
  return <Offline />;
};

export default Status;
