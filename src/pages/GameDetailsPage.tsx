import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { AppDispatch, RootState } from "../store/store";
import { fetchGameDetailsData } from "../store/gameActions";
import { GameDetails } from "../components/GameDetails";
import { Hourglass } from "react-loader-spinner";

export const GameDetailsPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch<AppDispatch>();
  const { gameDetail, loading, error } = useSelector(
    (state: RootState) => state.gameDetails
  );

  useEffect(() => {
    if (id) dispatch(fetchGameDetailsData(id));
  }, [dispatch, id]);

  if (loading)
    return (
      <div className="flex w-full h-full items-center justify-center">
        <Hourglass
          visible={true}
          height="80"
          width="80"
          ariaLabel="hourglass-loading"
          wrapperStyle={{}}
          wrapperClass=""
          colors={["#306cce", "#72a1ed"]}
        />
      </div>
    );

  if (error) return <div>Error...</div>;
  if (gameDetail)
    return (
      <div>
        <GameDetails
          thumbnail={gameDetail.thumbnail}
          short_description={gameDetail.short_description}
          description={gameDetail.description}
          freetogame_profile_url={gameDetail.freetogame_profile_url}
          developer={gameDetail.developer}
          game_url={gameDetail.game_url}
          genre={gameDetail.genre}
          platform={gameDetail.platform}
          publisher={gameDetail.publisher}
          release_date={gameDetail.release_date}
          title={gameDetail.title}
          status={gameDetail.status}
          screenshots={gameDetail.screenshots}
          minimum_system_requirements={gameDetail.minimum_system_requirements}
        />
      </div>
    );
};
