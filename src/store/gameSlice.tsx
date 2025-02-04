import { createSlice } from "@reduxjs/toolkit";
import { Game } from "../helpers/types";

const games: Game[] = [];

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
      state.games = [];
      state.error = null;
    },
    fetchGameSuccess: (state, action) => {
      state.loading = false;
      state.games.push(...action.payload);
    },
    fetchGameFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const gameReducer = gameSlice.reducer;
export const gameActions = gameSlice.actions;
