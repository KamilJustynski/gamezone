import React from "react";
import { GameDetailsScheme } from "../../helpers/types";

export const MainInfo: React.FC<GameDetailsScheme> = ({
  thumbnail,
  title,
  short_description,
  genre,
  game_url,
  publisher,
  platform,
  release_date,
}) => {
  return (
    <div className="flex gap-5 bg-primaryDark p-10 rounded-3xl">
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
          <div className="w-fit p-2 rounded-lg bg-primary text-primaryDark">
            <p>Genre: {genre}</p>
          </div>
          <a
            href={game_url}
            target="_blank"
            className="w-fit p-2 rounded-lg bg-primary text-primaryDark"
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
  );
};
