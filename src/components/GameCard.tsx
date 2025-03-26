import { GameScheme } from "../helpers/types";
import { Link } from "react-router-dom";
import { Heart } from "../img/Heart";
import { SolidHeart } from "../img/SolidHeart";
import { useDispatch, useSelector } from "react-redux";
import { FavoritesGameAction } from "../store/favoritesSlice";
import { RootState } from "../store/store";

export const GameCard: React.FC<GameScheme> = ({
  thumbnail,
  title,
  short_description,
  id,
  platform,
  genre,
}) => {
  const dispatch = useDispatch();
  const favorites = useSelector(
    (state: RootState) => state.favorites.favorites
  );

  const isFavorite = favorites.some((fav) => fav.id === id);

  const handleFavoriteClick = () => {
    dispatch(
      FavoritesGameAction.toggleFavorite({
        id,
        title,
        thumbnail,
        short_description,
        genre,
        platform,
      })
    );
  };

  title = title.replace(/:/g, " ");
  return (
    <Link to={`${title}/${id.toString()}`}>
      <div
        key={id}
        className="w-full h-full flex flex-col overflow-hidden  relative rounded-2xl p-5 hover:scale-[102%] duration-200"
      >
        <div className="bg-gradient-to-l from-[#3DBDA7] to-[#067D71] w-[600px] h-[600px] absolute rotate-[80rad] -left-90 -top-10"></div>
        <div className="bg-gradient-to-l to-[#3DBDA7] from-[#067d718e] w-[600px] h-[600px] absolute rotate-[80rad] left-50 -top-10"></div>
        <img
          className="rounded-xl z-40 w-full"
          src={thumbnail}
          alt="Game-image"
        />

        <div className="flex flex-col text-white justify-between py-5 h-full z-40">
          <h5 className="mb-2 text-xl font-bold">{title}</h5>
          <p className="mb-2 font-normal">{short_description}</p>
          <div className="flex justify-between items-center">
            <div className="flex gap-2">
              <p className="info-element">{genre}</p>
              <p className="info-element">{platform}</p>
            </div>

            <button
              className="cursor-pointer hover:scale-105 ease-in-out duration-150"
              onClick={(e) => {
                e.stopPropagation();
                e.preventDefault();
                handleFavoriteClick();
              }}
            >
              {isFavorite ? <SolidHeart color="red" /> : <Heart />}
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
};
