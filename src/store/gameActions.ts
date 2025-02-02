import { gameActions } from "./gameSlice";
import { AppDispatch } from "./store";

export const fetchGameData = () => {
  return async (dispatch: AppDispatch) => {
    dispatch(gameActions.fetchGameRequest());

    const fetchData = async () => {
      const response = await fetch(
        "https://free-to-play-games-database.p.rapidapi.com/api/games",
        {
          method: "GET",
          headers: {
            "x-rapidapi-key":
              "92d74b8d63msh2f2e37c44d9a35ap1bf29fjsnaab5de05cdbf",
            "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
          },
        }
      );

      if (!response.ok) {
        throw new Error("Could not fetch game data!");
      }

      return await response.json();
    };

    try {
      const data = await fetchData();
      dispatch(gameActions.fetchGameSuccess(data));
    } catch (error: unknown) {
      if (error instanceof Error) {
        dispatch(gameActions.fetchGameFailure(error.message));
      } else {
        dispatch(gameActions.fetchGameFailure("An unknown error occurred"));
      }
    }
  };
};
