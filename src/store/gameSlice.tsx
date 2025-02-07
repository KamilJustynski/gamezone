import { createSlice } from "@reduxjs/toolkit";
import { GameScheme } from "../helpers/types";

const games: GameScheme[] = [];

const gameSlice = createSlice({
  name: "games",
  initialState: {
    games,
    loading: false,
    error: null,
  },
  reducers: {
    fetchGameRequest: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchGameSuccess: (state, action) => {
      state.games = [];
      state.loading = false;
      state.games.push(...action.payload);
    },
    fetchGameFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    fetchGameSortDataSuccess: (state, action) => {
      state.games = [];
      state.loading = false;
      state.games.push(...action.payload);
    },
  },
});

export const gameReducer = gameSlice.reducer;
export const gameActions = gameSlice.actions;
