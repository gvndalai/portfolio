import React from "react";
import { Button } from "./button";
import { Background } from "./background";
const jobDescription = [
  {
    title: "Sr. Frontend Developer",
    description: [
      <li>Sed quis justo ac magna.</li>,
      <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>,
      <li>Sed quis justo ac magna.</li>,
      <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>,
    ],
    date: "Nov 2021 - Present",
  },
  {
    title: "Full Stack Developer",
    description: [
      <li>Sed quis justo ac magna.</li>,
      <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>,
      <li>Sed quis justo ac magna.</li>,
      <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>,
    ],
    date: "Nov 2021 - Present",
  },
  {
    title: "Team Lead",
    description: [
      <li>Sed quis justo ac magna.</li>,
      <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>,
      <li>Sed quis justo ac magna.</li>,
      <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>,
    ],
    date: "Nov 2021 - Present",
  },
];
export const Experience = () => {
  return (
    <div className="flex flex-col items-center bg-gray-50 w-full px-20 py-24 gap-12">
      <div className="flex flex-col items-center">
        <Button text="Experience" />
        <p>Here is a quick summary of my most recent experiences:</p>
      </div>
      <div className="flex flex-col gap-12">
        {jobDescription.map((job, index) => {
          return (
            <Background
              key={index}
              title={job.title}
              description={job.description}
              date={job.date}
            />
          );
        })}
      </div>
    </div>
  );
};
