import React from "react";
import { SSicon } from "./icons/SSIcon";
import { LightModeIcon } from "./icons/LightModeIcon";
export const HamburgerMenu = (onDownloadPdf) => {
  return (
    <div className="hamburger-menu flex flex-col w-full h-[667px] sm:hidden block absolute bg-gray-50 ">
      <div className="flex p-4 justify-between w-full">
        <SSicon />
        <div>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18 6L6 18"
              stroke="#4B5563"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M6 6L18 18"
              stroke="#4B5563"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      </div>
      <ul className="flex flex-col p-4 gap-4 text-[16px] hamburger-list">
        <li>About</li>
        <li>Work</li>
        <li>Testimonials</li>
        <li>Contact</li>
      </ul>
      <div className="p-4 flex flex-col gap-[16px]">
        <div className="flex justify-between">
          <p>Switch Theme</p>
          <LightModeIcon />
        </div>
        <div className="flex justify-center">
          <button
            className="bg-gray-900 text-gray-100 w-full h-9 text-base font-medium px-4 py-1 m-0 rounded-xl hover:bg-gray-700 transition active:bg-gray-800"
            onClick={onDownloadPdf}
          >
            Download CV
          </button>
        </div>
      </div>
    </div>
  );
};
