import { Game } from "../helpers/types";

export const GameCard: React.FC<Game> = ({
  thumbnail,
  title,
  short_description,
  id,
  game_url,
  platform,
  genre,
  release_date,
}) => {
  return (
    <a href={game_url} target="_blank">
      <div
        key={id}
        className="max-w-sm rounded-lg h-[480px] shadow-sm hover:scale-105 duration-200 dark:bg-gray-800 dark:border-gray-700"
      >
        <img className="rounded-t-lg w-full" src={thumbnail} alt="" />

        <div className="flex flex-col justify-between p-5">
          <h5 className="mb-2 text-2xl font-bold tracking-tight dark:text-white">
            {title}
          </h5>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {short_description}
          </p>
          <p className="inline-flex items-center px-3 py-2 text-sm font-medium text-center bg-blue-700 rounded-lg  dark:bg-blue-600 dark:hover:bg-blue-700">
            {genre}
          </p>
        </div>
        <div className="flex justify-between text-white">
          <p>{platform}</p>
          <p>{release_date}</p>
        </div>
      </div>
    </a>
  );
};
