import React from "react";
import { Button } from "./Button";
import { Fiskil } from "./Fiskil";
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
      <div className="flex flex-col gap-[48px]">
        <div>
          <Fiskil />
        </div>
        <div>
          <Fiskil reverse="flex-row-reverse" />
        </div>
        <div>
          <Fiskil />
        </div>
      </div>
    </div>
  );
};
