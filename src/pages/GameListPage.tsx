import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchGameData } from "../store/gameActions";
import { RootState, AppDispatch } from "../store/store";
import { GameCard } from "../components/GameCard";

export const GameListPage = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { games, loading, error } = useSelector(
    (state: RootState) => state.games
  );

  useEffect(() => {
    dispatch(fetchGameData());
  }, [dispatch]);

  if (loading) return <p>Ładowanie...</p>;

  if (error) return <p>Błąd: {error}</p>;

  return (
    <div className="grid grid-cols-4 gap-4 mb-4">
      {games.map((game, index) => (
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
  );
};
