import React from "react";
import { useTimer } from "react-timer-hook";

const OfferTimer = ({ expiryTimestamp }) => {
  const { seconds, minutes, hours, days } = useTimer({ expiryTimestamp });
  return (
    <div className="tp-coupon-countdown-inner">
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
    </div>
  );
};

export default OfferTimer;
