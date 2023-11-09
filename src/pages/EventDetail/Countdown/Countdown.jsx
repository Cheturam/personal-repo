import React from "react";
import "./Countdown.scss";

const Countdown = ({ end_date }) => {
  return (
    <div className="countdown-cont">
      <div className="countdown">
        <div className="hours">
          <b className="b1">05</b>
          <p className="hours1">Hours</p>
        </div>
        <b className="seperator2">:</b>
        <div className="minutes">
          <b className="b1">29</b>
          <p className="hours1">Minutes</p>
        </div>
        <b className="seperator2">:</b>
        <div className="seconds">
          <b className="b1">56</b>
          <p className="hours1">Seconds</p>
        </div>
      </div>
    </div>
  );
};

export default Countdown;
