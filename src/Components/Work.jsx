import React from "react";
import { Button } from "./Button";
import { Fiskil } from "./fiskil";
export const Work = () => {
  return (
    <div
      className="flex flex-col items-center gap-12 sm:py-24 sm:px-20 w-full px-4 py-[64px]"
      id="background"
    >
      <div className="flex flex-col items-center">
        <Button text="Work" />
        <p>Some of the noteworthy projects I have built:</p>
      </div>
      <div className="flex flex-col gap-[48px] w-full">
        <div>
          <Fiskil />
        </div>
        <div>
          <Fiskil reverse="sm:flex-row-reverse" />
        </div>
        <div>
          <Fiskil />
        </div>
      </div>
    </div>
  );
};
