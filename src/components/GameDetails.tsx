import React from "react";
import { GameDetailsScheme } from "../helpers/types";
export const GameDetails: React.FC<GameDetailsScheme> = ({
  description,
  game_url,
  short_description,
  genre,
  // minimum_system_requirements,
  platform,
  publisher,
  release_date,
  screenshots,
  thumbnail,
  title,
}) => {
  return (
    <div className="text-white flex flex-col gap-5">
      <div className="flex gap-5 bg-gray-800/60 p-10 rounded-3xl">
        <div className="flex-1">
          <img
            src={thumbnail}
            alt="Main game image"
            className="w-full h-full rounded-2xl"
          />
        </div>
        <div className="flex flex-col gap-1 justify-between flex-1 p-5">
          <h1 className="text-4xl  font-bold">{title}</h1>
          <p>{short_description}</p>
          <div className="flex gap-3 w-fit">
            <div className="w-fit p-2 rounded-lg bg-blue-600">
              <p>Genre: {genre}</p>
            </div>
            <a
              href={game_url}
              target="_blank"
              className="w-fit p-2 rounded-lg bg-blue-600"
            >
              Go to game page
            </a>
          </div>
          <div className="flex gap-3">
            <p>{publisher}</p>
            <p>{platform}</p>
            <p>{release_date}</p>
          </div>
        </div>
      </div>

      <div className="bg-gray-800/60 p-10 rounded-3xl">
        <p className="mb-5 font-bold text-4xl">Description:</p>
        <p>{description}</p>
      </div>

      <div className="bg-gray-800/60 p-10 rounded-3xl">
        <h1 className="text-4xl mb-5 font-bold">Screenshots:</h1>
        <div className="grid grid-cols-3 gap-5">
          {screenshots.map((img) => (
            <img
              key={img.id}
              src={img.image}
              alt="Screenshots"
              className="rounded-2xl w-auto h-[200px]"
            />
          ))}
        </div>
      </div>
      {/* <p>
        {minimum_system_requirements
          ? minimum_system_requirements.graphics
          : ""}
      </p> */}
    </div>
  );
};
