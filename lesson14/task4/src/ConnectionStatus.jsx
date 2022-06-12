import React, { useEffect, useState } from "react";

const ConnectionStatus = () => {
  const [isOnline, setStatus] = useState(true);

  useEffect(() => {
    const setOfflineStatus = () => {
      setStatus(false);
    };

    const setOnlineStatus = () => {
      setStatus(true);
    };

    window.addEventListener("offline", setOfflineStatus);
    window.addEventListener("online", setOnlineStatus);

    return () => {
      window.removeEventListener("offline", setOfflineStatus);
      window.removeEventListener("online", setOnlineStatus);
    };
  });

  return !isOnline ? (
    <div className="status status_offline">offline</div>
  ) : (
    <div className="status">online</div>
  );
};

export default ConnectionStatus;
