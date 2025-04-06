import React from "react";
import { GameDetailsScheme } from "../../helpers/types";
import { MainInfo } from "./MainInfo";
import { Screenshots } from "./Screenshots";

export const GameDetails: React.FC<GameDetailsScheme> = ({
  description,
  game_url,
  short_description,
  genre,
  platform,
  publisher,
  release_date,
  screenshots,
  thumbnail,
  title,
}) => {
  return (
    <div className="text-white flex flex-col gap-5">
      <div className="flex gap-5">
        <MainInfo
          thumbnail={thumbnail}
          title={title}
          short_description={short_description}
          genre={genre}
          game_url={game_url}
          publisher={publisher}
          platform={platform}
          release_date={release_date}
        />

        <div className="bg-primaryDark w-1/2 p-10 rounded-3xl">
          <p className="mb-5 font-bold text-4xl">Description:</p>
          <p>{description}</p>
        </div>
      </div>

      <Screenshots screenshots={screenshots!} />
    </div>
  );
};
