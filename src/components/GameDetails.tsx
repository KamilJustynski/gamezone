import React from "react";
import { GameDetailsScheme } from "../helpers/types";
export const GameDetails: React.FC<GameDetailsScheme> = ({
  description,
  developer,
  freetogame_profile_url,
  game_url,
  genre,
  minimum_system_requirements,
  platform,
  publisher,
  release_date,
  screenshots,
  status,
  thumbnail,
  title,
}) => {
  return (
    <div className="text-white">
      <div className="flex gap-5 mb-5">
        <div className="flex-1">
          <img
            src={thumbnail}
            alt="Main game image"
            className="w-full h-full"
          />
        </div>
        <div className="flex flex-col gap-3 flex-1">
          <h1 className="text-4xl font-bold">{title}</h1>
          <p className="text-sm">{description}</p>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-5">
        {screenshots.map((img) => (
          <img key={img.id} src={img.image} alt="" />
        ))}
      </div>
      <p>{developer}</p>
      <p>{freetogame_profile_url}</p>
      <p>{game_url}</p>
      <p>{genre}</p>
      <p>
        {minimum_system_requirements
          ? minimum_system_requirements.graphics
          : ""}
      </p>
      <p>{status}</p>
      <p>{platform}</p>
      <p>{publisher}</p>
      <p>{release_date}</p>
    </div>
  );
};
