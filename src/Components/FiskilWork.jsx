import React from "react";
import { Link } from "./Icons/Link";
export const FiskilWork = (props) => {
  return (
    <div className="flex ">
      <div className="flex flex-col gap-[24px]">
        <h1 className="text-[20px] text-gray-900 font-semibold">
          {props.title}
        </h1>
        <p className="text-[16px] font-normal text-gray-600">
          {props.description}
        </p>
        <div>{props.buttons}</div>
        <Link />
      </div>
    </div>
  );
};
