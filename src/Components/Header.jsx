import React, { useRef, useState } from "react";
import { LightModeIcon } from "./icons/LightModeIcon";
import { DarkModeIcon } from "./icons/DarkModeIcon";
import { Menu } from "./Menu";
import { SSicon } from "./icons/SSIcon";

export const Header = ({ onDownloadPdf }) => {
  const [isHamburgerMenuVisible, setIsHamburgerMenuVisible] = useState(false);
  const toggleHamburgerMenu = () => {
    setIsHamburgerMenuVisible(!isHamburgerMenuVisible);
  };
  return (
    <div className="w-full flex justify-between sm:px-20 p-4 sm:py-4 relative">
      <SSicon />
      <div className="absolute p-[22px] right-0 top-0 block sm:hidden">
        <Menu onClick={toggleHamburgerMenu} />
      </div>
      <div className="sm:flex sm:gap-6 hidden sm:block">
        <div className="flex gap-6 items-center">
          <div className="hover:text-gray-900 cursor-pointer text-gray-600">
            About
          </div>
          <div className="hover:text-gray-900 cursor-pointer text-gray-600">
            Work
          </div>
          <div className="hover:text-gray-900 cursor-pointer text-gray-600">
            Testimonials
          </div>
          <div className="hover:text-gray-900 cursor-pointer text-gray-600">
            Contact
          </div>
          <span className="w-0 h-6 border border-solid border-gray-300"></span>
        </div>

        <div className="flex gap-4 items-center relative">
          <LightModeIcon />
          <DarkModeIcon />
          <button
            className="bg-gray-900 text-gray-100 w-34 h-9 text-base font-medium px-4 py-1 m-0 rounded-xl hover:bg-gray-700 transition active:bg-gray-800"
            onClick={onDownloadPdf}
          >
            Download CV
          </button>
        </div>
      </div>
      {isHamburgerMenuVisible && <HamburgerMenu />}
    </div>
  );
};
