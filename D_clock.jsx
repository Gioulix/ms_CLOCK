import React, { useState, useEffect } from "react";

function D_clock() {
  const [time, setTime] = useState(new Date());
  // Set the initial time to the current date and time
  // This will be updated every second by the setInterval function
  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    });

    // Clear the interval when the component unmounts
    // to prevent memory leaks and unnecessary updates
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  function formatTime() {
    let hours = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();
    const miliseconds = time.getMilliseconds();
    const am_pm = hours >= 12 ? "PM" : "AM";

    hours = hours % 12 || 12;

    return `${padZero(hours)}:${padZero(minutes)}:${padZero(
      seconds
    )}:${padMiliZero(miliseconds)} ${am_pm}`;
  }

  function padZero(number) {
    return (number < 10 ? "0" : "") + number;
  }

  function padMiliZero(number) {
    return (number < 100 ? "0" : "") + (number < 10 ? "0" : "") + number;
  }

  return (
    <div className="clock-container">
      <div className="clock">
        <span>{formatTime()}</span>
      </div>
    </div>
  );
}

export default D_clock;
