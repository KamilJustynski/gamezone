import { RootState } from "../store/store";
import { useSelector } from "react-redux";
import { GameCard } from "../components/GameCard";

export const FavoritePage = () => {
  const favorites = useSelector(
    (state: RootState) => state.favorites.favorites
  );

  return (
    <div>
      <h1 className="mb-4 text-4xl text-white font-bold">Favorites game</h1>
      <div className="container grid 2xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2  gap-8 mb-4">
        {favorites.map((game, index) => (
          <GameCard
            key={index}
            id={game.id}
            thumbnail={game.thumbnail}
            title={game.title}
            short_description={game.short_description}
            genre={game.genre}
            game_url={game.game_url}
            platform={game.platform}
            developer={game.developer}
            release_date={game.release_date}
          />
        ))}
      </div>
    </div>
  );
};
