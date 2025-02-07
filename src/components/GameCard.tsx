import { GameScheme } from "../helpers/types";
import { Link } from "react-router-dom";

export const GameCard: React.FC<GameScheme> = ({
  thumbnail,
  title,
  short_description,
  id,
  platform,
  genre,
}) => {
  title = title.replace(/:/g, " ");
  return (
    <Link to={`${title}/${id.toString()}`}>
      <div
        key={id}
        className="w-full h-full flex flex-col rounded-lg shadow-sm hover:scale-105 duration-200"
      >
        <img className="rounded-t-lg w-full" src={thumbnail} alt="" />

        <div className="flex flex-col justify-between p-5 h-full rounded-b-lg bg-gray-800/60">
          <h5 className="mb-2 text-xl font-bold tracking-tight dark:text-white">
            {title}
          </h5>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {short_description}
          </p>
          <div className="flex gap-2">
            <p className="block items-center px-3 py-2 text-sm font-medium text-center bg-blue-700 rounded-lg  dark:bg-blue-600">
              {genre}
            </p>
            <p className="block items-center px-3 py-2 text-sm font-medium text-center bg-blue-700 rounded-lg  dark:bg-blue-600">
              {platform}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};
