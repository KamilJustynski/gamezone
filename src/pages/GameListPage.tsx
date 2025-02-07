import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { fetchGameData } from "../store/gameActions";
import { RootState, AppDispatch } from "../store/store";
import { GameCard } from "../components/GameCard";
import { Pagination } from "../components/Pagination";
import { Search } from "../components/Search";

export const GameListPage = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { games, loading, error } = useSelector(
    (state: RootState) => state.games
  );
  const [page, setPage] = useState(1);

  useEffect(() => {
    dispatch(fetchGameData());
  }, [dispatch]);

  if (loading) return <p>Ładowanie...</p>;
  if (error) return <p>Błąd: {error}</p>;

  const gamesPerPage = 20;
  const startIndex = (page - 1) * gamesPerPage;
  const endIndex = startIndex + gamesPerPage;
  const paginatedGames = games.slice(startIndex, endIndex);
  const totalPages = Math.ceil(games.length / gamesPerPage);

  const changePage = (newPage: number) => {
    setPage(newPage);
    window.scrollTo({ top: 0, behavior: "smooth" });
    console.log(page);
  };

  return (
    <div>
      <Search />
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
      <Pagination
        games={games}
        page={page}
        endIndex={endIndex}
        totalPages={totalPages}
        onClickNext={() => changePage(page + 1)}
        onClickPrev={() => changePage(Math.max(page - 1, 1))}
        lastPage={() => changePage(totalPages)}
        firstPage={() => changePage(1)}
      />
    </div>
  );
};
