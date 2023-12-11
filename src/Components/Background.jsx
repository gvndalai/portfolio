import React from "react";
import { UpworkIcon } from "./Icons/UpworkIcon";
export const Background = (props) => {
  return (
    <div className=" flex flex-col gap-12">
      <div className="flex w-[896px] gap-12 p-8 rounded-xl bg-slate-100 shadow-sm md:shadow-md ">
        <div className="w-[206px]">
          <UpworkIcon />
        </div>
        <div className="flex flex-col gap-[16px] w-[384px]">
          <h2 className="text-xl font-semibold">{props.title}</h2>
          <ul className="list-disc text-[16px]">{props.description}</ul>
        </div>
        <div className="text-[16px]">{props.date}</div>
      </div>
    </div>
  );
};
