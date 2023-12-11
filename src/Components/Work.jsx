import React from "react";
import { Button } from "./Button";
export const Work = () => {
  return (
    <div
      className="flex flex-col items-center gap-12 py-24 px-20 w-full"
      id="background"
    >
      <div className="flex flex-col items-center">
        <Button text="Work" />
        <p>Some of the noteworthy projects I have built:</p>
      </div>
      <div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};
