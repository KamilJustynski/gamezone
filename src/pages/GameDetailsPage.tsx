import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { AppDispatch, RootState } from "../store/store";
import { fetchGameDetailsData } from "../store/gameActions";

export const GameDetailsPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch<AppDispatch>();
  const { gameDetail, loading, error } = useSelector(
    (state: RootState) => state.gameDetails
  );

  useEffect(() => {
    if (id) dispatch(fetchGameDetailsData(id));
  }, [dispatch, id]);

  if (loading) return <div>Loading...</div>;

  if (error) return <div>Error...</div>;

  console.log(gameDetail);

  return <div>Game {id}</div>;
};
