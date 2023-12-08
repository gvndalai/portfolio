import React from "react";
import { Utilities } from "./Utilities";
export const Utility = (Utility) => {
  return (
    <div className="flex justify-center">
      {Utilities.icon}
      <p>{Utilities.title}</p>
    </div>
  );
};
