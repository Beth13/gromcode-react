import React, { useEffect, useState } from "react";
import moment from "moment";

const getTimeWithOffset = (offset) => {
  const currentTime = new Date();
  const utcOffset = currentTime.getTimezoneOffset() / 60;
  return new Date(
    currentTime.setHours(currentTime.getHours() + offset + utcOffset)
  );
};

const Clock = ({ location, offset }) => {
  const [data, setHour] = useState({
    location,
    offset: moment(getTimeWithOffset(offset)).format("LTS"),
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setHour({
        location,
        offset: moment(getTimeWithOffset(offset)).format("LTS"),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="clock">
      <div className="clock__location">{data.location}</div>
      <div className="clock__time">{data.offset}</div>
    </div>
  );
};

export default Clock;
