import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { fetchGameData } from "../store/gameActions";
import { RootState, AppDispatch } from "../store/store";
import { GameCard } from "../components/GameCard";

export const GameListPage = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { games, loading, error } = useSelector(
    (state: RootState) => state.games
  );
  const [page, setPage] = useState(1);
  const gamesPerPage = 20;

  useEffect(() => {
    if (games.length === 0) {
      dispatch(fetchGameData());
    }
  }, [dispatch, games.length]);

  if (loading) return <p>Ładowanie...</p>;
  if (error) return <p>Błąd: {error}</p>;

  const startIndex = (page - 1) * gamesPerPage;
  const endIndex = startIndex + gamesPerPage;
  const paginatedGames = games.slice(startIndex, endIndex);

  const totalPages = Math.ceil(games.length / gamesPerPage);

  const changePage = (newPage: number) => {
    setPage(newPage);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div>
      <div className="grid grid-cols-4 gap-4 mb-4">
        {paginatedGames.map((game, index) => (
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
      <div className="flex justify-center gap-4 mt-4">
        <button
          className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
          onClick={() => changePage(Math.max(page - 1, 1))}
          disabled={page === 1}
        >
          Poprzednia
        </button>

        <span>
          Strona {page} / {totalPages}
        </span>

        <button
          className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
          onClick={() => changePage(page + 1)}
          disabled={endIndex >= games.length}
        >
          Następna
        </button>
      </div>
    </div>
  );
};
