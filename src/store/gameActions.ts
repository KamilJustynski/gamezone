import { gameDetailsActions } from "./gameDetailsSlice";
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

      const data = await response.json();

      return data;
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

export const fetchGameDetailsData = (id: string) => {
  return async (dispatch: AppDispatch) => {
    dispatch(gameDetailsActions.fetchGameDetailsRequest());

    const fetchData = async () => {
      const response = await fetch(
        `https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`,
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

      const data = await response.json();

      return data;
    };

    try {
      const data = await fetchData();
      dispatch(gameDetailsActions.fetchGameDetailsSuccess(data));
    } catch (error: unknown) {
      if (error instanceof Error) {
        dispatch(gameDetailsActions.fetchGameDetailsFailure(error.message));
      } else {
        dispatch(
          gameDetailsActions.fetchGameDetailsFailure(
            "Could not fetch game details!"
          )
        );
      }
    }
  };
};

export const fetchGameByPlatform = (platform: string) => {
  return async (dispatch: AppDispatch) => {
    dispatch(gameActions.fetchGameRequest());

    const fetchData = async () => {
      const response = await fetch(
        `https://free-to-play-games-database.p.rapidapi.com/api/games?platform=${platform}`,
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
        throw new Error("Could not fetch game!");
      }

      const data = await response.json();

      return data;
    };

    try {
      const data = await fetchData();
      dispatch(gameActions.fetchGameSortDataSuccess(data));
    } catch (error: unknown) {
      if (error instanceof Error) {
        dispatch(gameActions.fetchGameFailure(error.message));
      } else {
        dispatch(gameActions.fetchGameFailure("Could not fetch game!"));
      }
    }
  };
};

export const fetchGameByCategory = (category: string) => {
  return async (dispatch: AppDispatch) => {
    dispatch(gameActions.fetchGameRequest());

    const fetchData = async () => {
      const response = await fetch(
        `https://free-to-play-games-database.p.rapidapi.com/api/games?category=${category}`,
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
        throw new Error("Could not fetch game!");
      }

      const data = await response.json();

      return data;
    };

    try {
      const data = await fetchData();
      dispatch(gameActions.fetchGameByCategory(data));
    } catch (error: unknown) {
      if (error instanceof Error) {
        dispatch(gameActions.fetchGameFailure(error.message));
      } else {
        dispatch(gameActions.fetchGameFailure("Could not fetch data!"));
      }
    }
  };
};

export const fetchSortGameBy = (sortBy: string) => {
  return async (dispatch: AppDispatch) => {
    dispatch(gameActions.fetchGameRequest());

    const fetchData = async () => {
      const response = await fetch(
        `https://free-to-play-games-database.p.rapidapi.com/api/games?sort-by=${sortBy}`,
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
        throw new Error("Could not fetch game!");
      }

      const data = await response.json();

      return data;
    };

    try {
      const data = await fetchData();
      dispatch(gameActions.fetchSortGame(data));
    } catch (error: unknown) {
      if (error instanceof Error) {
        dispatch(gameActions.fetchGameFailure(error.message));
      } else {
        dispatch(gameActions.fetchGameFailure("Could not fetch data!"));
      }
    }
  };
};

export const fetchMultipleTagGames = (tags: string[], platform: string) => {
  return async (dispatch: AppDispatch) => {
    dispatch(gameActions.fetchGameRequest());

    const tagsString = tags.join(".");

    const fetchData = async () => {
      const response = await fetch(
        `https://free-to-play-games-database.p.rapidapi.com/api/filter?tag=${tagsString}&platform=${platform}`,
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
        throw new Error("Could not fetch game!");
      }

      const data = await response.json();

      return data;
    };

    try {
      const data = await fetchData();
      dispatch(gameActions.fetchMultipleTagSortGame(data));
    } catch (error: unknown) {
      if (error instanceof Error) {
        dispatch(gameActions.fetchGameFailure(error.message));
      } else {
        dispatch(gameActions.fetchGameFailure("Could not fetch data!"));
      }
    }
  };
};
