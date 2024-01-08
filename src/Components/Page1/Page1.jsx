import React from "react";
import { Utilities } from "./Utilities";
import { Button } from "../Button";
export const Page1 = () => {
  return (
    <div className="flex flex-col  items-center w-full px-4 py-[64pxgit ] sm:px-[80px] sm:py-[96px]">
      {" "}
      <div>
        <Button text="Skills" />
      </div>
      <p>The skills, tools and technologies I am really good at:</p>
      <div className="my-[48px] flex flex-col  items-center w-full gap-[48px]">
        <Utilities />
        <Utilities />
      </div>
    </div>
  );
};
