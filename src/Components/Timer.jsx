import React, { useState, useEffect } from "react";

export const Timer = () => {
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [doll, setDolls] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let intervals;
    let intervalm;
    let intervald;

    if (isRunning) {
      intervals = setInterval(() => {
        setSeconds((prevSeconds) => (prevSeconds === 59 ? 0 : prevSeconds + 1));
      }, 1000);

      intervalm = setInterval(() => {
        setMinutes((prevMinutes) => (prevMinutes === 59 ? 0 : prevMinutes + 1));
      }, 60000);

      intervald = setInterval(() => {
        setDolls((prevDoll) => (prevDoll === 99 ? 0 : prevDoll + 1));
      }, 10);
    }

    return () => {
      clearInterval(intervals);
      clearInterval(intervalm);
      clearInterval(intervald);
    };
  }, [isRunning]);

  function buttonTrigger() {
    setIsRunning(!isRunning);
  }

  return (
    <div className="flex justify-center items-center gap-2">
      <div className="w-[200px]">
        <button
          className={`mx-[10px] ${isRunning ? "bg-red-500" : "bg-green-500"}`}
          onClick={buttonTrigger}
        >
          {isRunning ? "stop" : "start"}
        </button>
        {minutes < 10 ? `0${minutes}` : minutes} :{" "}
        {seconds < 10 ? `0${seconds}` : seconds} :{" "}
        {doll < 10 ? `0${doll}` : doll}
        {isRunning ? null : (
          <button
            className="mx-[10px] bg-gray-300"
            onClick={() => {
              setMinutes(0);
              setSeconds(0);
              setDolls(0);
            }}
          >
            reset
          </button>
        )}
      </div>
    </div>
  );
};
