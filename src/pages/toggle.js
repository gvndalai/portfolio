import React, { useState, useEffect } from "react";

const Counter = () => {
  const [minutes, setMinute] = useState(0);
  const addMinutes = () => {
    setMinute(minutes + 1);
  };
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     addMinute();
  //   }, 60);
  //   return () => clearInterval(interval);
  // });
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((seconds) => seconds + 1);
    }, 1000);
    addMinutes();
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex justify-center items-center gap-2">
      {/* {!!minute ? <div>{minute}</div> : <p>minute -iin utga 0 baina</p>} */}
      <div>
        {minutes}:{seconds}
      </div>

      {/* <button onClick={add}>add</button> */}
      {/* <button onClick={() => setIsVisible(!isVisible)}>stop</button> */}
    </div>
  );
};
export default Counter;
