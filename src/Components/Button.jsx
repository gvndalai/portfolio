import React from "react";

export const Button = (button) => {
  return (
    <button
      className={`rounded-[12px] w-fit bg-gray-200 py-[2px] px-[20px] text-gray-dark-50 mb-[16px] mr-[8px] bg-custom-gray-light`}
    >
      {" "}
      {button.text}{" "}
    </button>
  );
};
