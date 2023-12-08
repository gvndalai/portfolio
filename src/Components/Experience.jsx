import React from "react";
import { Button } from "./Button";
export const Experience = () => {
  return (
    <div className="flex flex-col items-center bg-gray-50 w-full px-20 py-24 gap-[48px]">
      <div className="flex flex-col items-center">
        <Button text="Experience" />
        <p>Here is a quick summary of my most recent experiences:</p>
      </div>
    </div>
  );
};
