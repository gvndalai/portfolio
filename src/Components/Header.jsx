import React, { useRef } from "react";
import { LightModeIcon } from "./icons/LightModeIcon";
import { SSicon } from "./icons/SSIcon";
import { DarkModeIcon } from "./icons/DarkModeIcon";
import { Menu } from "./Menu";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
export const Header = () => {
  const downloadPdf = () => {
    const input = pdfRef.current;
    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL("img/png");
      const pdf = new jsPDF("p", "mm", "a4", true);
      const componentWidth = doc.internal.pageSize.getWidth();
      const componentHeight = doc.internal.pageSize.getHeight();
      const imgWidth = canvas.width;
      const imgHeight = canvas.height;
      const ratio = Math.min(
        componentWidth / imgWidth,
        componentHeight / imgHeight
      );
      const imgX = (componentWidth - imgWidth * ratio) / 2;
      const imgY = 30;
      pdf.addImage(
        imgData,
        "PNG",
        imgX,
        imgY,
        componentWidth * ratio,
        componentHeight * ratio
      );
      pdf.save("invoice.pdf");
    });
  };
  const pdfRef = useRef();
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
          <button
            class="bg-gray-900 text-gray-100 w-34 h-9 text-base font-medium px-4 py-1 m-0 rounded-xl hover:bg-gray-700 transition active:bg-gray-800"
            onClick={downloadPdf()}
          >
            Download CV
          </button>
        </div>
      </div>
    </div>
  );
};
