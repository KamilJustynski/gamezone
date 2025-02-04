import { createSlice } from "@reduxjs/toolkit";
import { GameDetailsScheme } from "../helpers/types";

const initialState = {
  gameDetail: null as GameDetailsScheme | null,
  loading: false,
  error: null as string | null,
};

const GameDetailSlice = createSlice({
  name: "gameDetails",
  initialState,
  reducers: {
    fetchGameDetailsRequest: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchGameDetailsSuccess: (state, action) => {
      state.loading = false;
      state.gameDetail = action.payload;
    },
    fetchGameDetailsFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const gameDetailsReducer = GameDetailSlice.reducer;
export const gameDetailsActions = GameDetailSlice.actions;
