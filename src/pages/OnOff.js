import React, { useState } from "react";
import { OnButton } from "../Components/onButton";

function colorChange() {
  const [color, setColor] = useState(true);
  if (color === false) {
    setColor((color = "bg-red"));
  } else {
    setColor((color = "bg-green"));
  }
}
const OnOff = () => {
  return (
    <div>
      <OnButton bgcolor={color} change={colorChange} />
    </div>
  );
};
export default OnOff;
