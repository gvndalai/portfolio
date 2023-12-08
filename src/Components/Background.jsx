import React from "react";
import { UpworkIcon } from "./Icons/UpworkIcon";
export const Background = (props) => {
  return (
    <div className="flex gap-[48px] w-1/2 p-5 bg-slate-100 mb-2">
      <UpworkIcon />
      <div>
        <p>{props.title}</p>
        <ul>
          <li>sss</li>
          <li>ss</li>
          <li>sss</li>
        </ul>
      </div>
      <div>Dec</div>
    </div>
  );
};
