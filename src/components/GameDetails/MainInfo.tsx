import React from "react";
import { GameDetailsScheme } from "../../helpers/types";

export const MainInfo: React.FC<GameDetailsScheme> = ({ thumbnail, title }) => {
  return (
    <div className="flex flex-col gap-5 w-1/2 bg-primaryDark p-10 rounded-3xl">
      <h1 className="text-4xl  font-bold">{title}</h1>
      <div className="flex-1">
        <img src={thumbnail} alt="Main game image" className=" rounded-2xl" />
      </div>
      <div className="flex flex-col gap-1 justify-between flex-1 p-5"></div>
    </div>
  );
};
