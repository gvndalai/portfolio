import React from "react";
import { LocationIcon } from "./Icons/LocationIcon";
import { GreenDot } from "./Icons/GreenDot";
import { GitIcon } from "./Icons/GitIcon";
import { TwitterIcon } from "./Icons/TwitterIcon";
import { FigmaIcon } from "./Icons/FigmaIcon";
export const GeneralIntro = () => {
  return (
    <div class="w-full h-fit">
      <div class="sm:flex-row flex flex-col-reverse justify-center gap-12 w-full px-20 py-24 m-0 h-fit ">
        <div class="flex flex-col w-fit gap-12 h-fit">
          <h1 class="text-5xl font-bold leading-16 w-auto h-16">
            Erwin Smith 🔰
          </h1>
          <span class="text-gray-600 font-inter text-base font-normal leading-6 w-fit">
            Erwin Smith (エルヴィン・スミス Eruvin Sumisu?) was the 13th
            commander (団長 Danchō?) of the Scout Regiment. Discerning,
            intelligent, and widely respected, Erwin was an able commander.
            While he cared deeply for his men, he did not hesitate to sacrifice
            them for the good and prosperity of mankind, and his men have proven
            more than willing to stake their lives at his order. Erwin developed
            the Long-Distance Enemy Scouting Formation. Due to uncertainty about
            his future, he later named Hange Zoë as his successor.`
          </span>
          <div class="flex flex-col gap-2">
            <div class="flex gap-4 items-center">
              <LocationIcon />
              Paradis island
            </div>
            <div class="flex items-center gap-4">
              <GreenDot></GreenDot>
              Too busy dying for humanity.
            </div>
          </div>
          <div class="flex gap-4">
            <GitIcon />
            <TwitterIcon />
            <FigmaIcon />
          </div>
        </div>
        <img src="erwin.png" class="shadow-custom w-[280px] h-[320px]"></img>
      </div>
    </div>
  );
};
