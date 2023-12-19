import React from "react";
import { LightModeIcon } from "./icons/LightModeIcon";
import { SSicon } from "./icons/SSIcon";
import { DarkModeIcon } from "./icons/DarkModeIcon";
import { Menu } from "./Menu";

export const Header = () => {
  return (
    <div class="w-full flex justify-between sm:px-20 p-4 sm:py-4 relative">
      <SSicon />
      <div class=" absolute p-[22px] right-0 top-0 block sm:hidden">
        {" "}
        <Menu />
      </div>
      <div class="sm:flex sm:gap-6 hidden sm:block">
        <div class="flex gap-6 items-center">
          <div class="hover:text-gray-900 cursor-pointer text-gray-600">
            About
          </div>
          <div class="hover:text-gray-900 cursor-pointer text-gray-600">
            Work
          </div>
          <div class="hover:text-gray-900 cursor-pointer text-gray-600">
            Testimonials
          </div>
          <div class="hover:text-gray-900 cursor-pointer text-gray-600">
            Contact
          </div>
          <span class="w-0 h-6 border border-solid border-gray-300"></span>
        </div>

        <div class="flex gap-4 items-center relative">
          <LightModeIcon />
          <DarkModeIcon />
          <button class="bg-gray-900 text-gray-100 w-34 h-9 text-base font-medium px-4 py-1 m-0 rounded-xl hover:bg-gray-700 transition active:bg-gray-800">
            Download CV
          </button>
        </div>
      </div>
    </div>
  );
};
