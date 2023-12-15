import React, { useState } from "react";

const Toggle = () => {
  const [color, setColor] = useState(false);
  const [text, setText] = useState(false);
  function colorChange() {
    setColor(!color);
    setText(!text);
  }

  return (
    <div className={`${color ? "bg-red-600" : "bg-green-400"}`}>
      {/* <OnButton bgcolor={color} change={colorChange} /> */}
      {/* <div> */}
      <button onClick={colorChange}>{`${text ? "Off" : "On"}`}</button>
      {/* </div> */}
    </div>
  );
};
export default Toggle;
