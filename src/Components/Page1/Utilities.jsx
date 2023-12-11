import React from "react";
import { JavaScriptIcon } from "../Tools.jsx/JavaScriptIcon";
import { TypeScriptIcon } from "../Tools.jsx/TypeScriptIcon";
import { ReactIcon } from "../Tools.jsx/ReactIcon";
import { NextIcon } from "../Tools.jsx/NextIcon";
import { NodeIcon } from "../Tools.jsx/NodeIcon";
import { ExpressIcon } from "../Tools.jsx/ExpressIcon";
import { NestIcon } from "../Tools.jsx/NestIcon";
import { SocketIcon } from "../Tools.jsx/Socket";

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
    <div className="flex justify-between items-center w-full">
      {UtilityFirstBase.map((props) => (
        <div key={props.title} className="flex flex-col items-center ">
          {props.icon}
          <p>{props.title}</p>
        </div>
      ))}
    </div>
  );
};