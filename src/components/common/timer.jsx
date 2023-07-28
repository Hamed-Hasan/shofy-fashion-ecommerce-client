import React from "react";
import { useTimer } from "react-timer-hook";

const Timer = ({ expiryTimestamp }) => {
  const { seconds, minutes, hours, days } = useTimer({ expiryTimestamp });
  return (
    <ul>
      <li>
        <span>{days}</span> Day
      </li>
      <li>
        <span>{hours}</span> Hrs
      </li>
      <li>
        <span>{minutes}</span> Min
      </li>
      <li>
        <span>{seconds}</span> Sec
      </li>
    </ul>
  );
};

export default Timer;