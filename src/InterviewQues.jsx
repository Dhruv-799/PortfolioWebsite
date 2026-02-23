import React, { useState, useEffect } from "react";

const InterviewQues = () => {
  const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prev) => (prev + 1) % days.length); // loop through days
    }, 1000);

    return () => clearInterval(interval); // cleanup interval on unmount
  }, [days.length]);

  return (
    <>
      <h2>Today: {days[count]}</h2>
    </>
  );
};

export default InterviewQues;
