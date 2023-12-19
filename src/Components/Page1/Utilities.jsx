import React from "react";
import { JavaScriptIcon } from "../tools/JavaScriptIcon";
import { TypeScriptIcon } from "../tools/TypeScriptIcon";
import { ReactIcon } from "../tools/ReactIcon";
import { NextIcon } from "../tools/NextIcon";
import { NodeIcon } from "../tools/NodeIcon";
import { ExpressIcon } from "../tools/ExpressIcon";
import { NestIcon } from "../tools/NestIcon";
import { SocketIcon } from "../tools/Socket";

const UtilityFirstBase = [
  {
    icon: <JavaScriptIcon />,
    title: "Javascript",
  },
  {
    icon: <TypeScriptIcon />,
    title: "Typescript",
  },
  {
    icon: <ReactIcon />,
    title: "React",
  },

  {
    icon: <NextIcon />,
    title: "Next.js",
  },
  {
    icon: <NodeIcon />,
    title: "Node.js",
  },
  {
    icon: <ExpressIcon />,
    title: "Express.js",
  },
  {
    icon: <NestIcon />,
    title: "Nest.js",
  },
  {
    icon: <SocketIcon />,
    title: "Socket.io",
  },
];

export const Utilities = () => {
  return (
    <div className="sm:flex sm:justify-between sm:items-center w-full grid grid-cols-3">
      {UtilityFirstBase.map((props) => (
        <div key={props.title} className="flex flex-col items-center ">
          {props.icon}
          <p>{props.title}</p>
        </div>
      ))}
    </div>
  );
};
