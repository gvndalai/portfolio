import React from "react";
import { FiskilWork } from "./fiskilWork";
import { Button } from "./Button";
const FiskilDescription = [
  {
    title: "Fiskil",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.",
    buttons: [
      <Button text="react" />,
      <Button text="Next.js" />,
      <Button text="Typescript" />,
      <Button text="Nest.js" />,
      <Button text="PostgreSQL" />,
      <Button text="Tailwindcss" />,
      <Button text="Figma" />,
      <Button text="Cypress" />,
      <Button text="Storybook" />,
      <Button text="Git" />,
    ],
  },
];

export const Fiskil = (props) => {
  return (
    <div
      className={`flex shadow-sm md:shadow-md rounded-[12px] sm:flex-row flex-col items-center ${props.reverse}`}
    >
      <div className=" bg-gray-50 rounded-[12px] p-8 ">
        <img src="Picture.png" className="sm:w-[480px]  sm:m-[48px]" alt="" />
      </div>
      <div className="sm:w-[480px] sm:m-[48px]">
        {FiskilDescription.map((skil, index) => {
          return (
            <FiskilWork
              key={index}
              title={skil.title}
              git
              buttons={skil.buttons}
            />
          );
        })}
      </div>
    </div>
  );
};
