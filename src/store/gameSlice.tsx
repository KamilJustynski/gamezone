import { createSlice } from "@reduxjs/toolkit";
import { GameScheme } from "../helpers/types";

const games: GameScheme[] = [];

const gameSlice = createSlice({
  name: "games",
  initialState: {
    games,
    loading: false,
    error: null,
    selectedPlatform: "",
    selectedCategory: "",
    selectedAnotherTag: "",
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
      state.selectedPlatform = "";
    },
    fetchGameFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    fetchGameSortByPlatform: (state, action) => {
      state.games = [];
      state.loading = false;
      state.games.push(...action.payload);
    },
    setSelectedPlatform: (state, action) => {
      state.selectedPlatform = action.payload;
      state.selectedCategory = "";
      state.selectedAnotherTag = "";
    },
    fetchGameSortByCategory: (state, action) => {
      state.games = [];
      state.loading = false;
      state.games.push(...action.payload);
    },
    setSelectedCategory: (state, action) => {
      state.selectedCategory = action.payload;
      state.selectedPlatform = "";
      state.selectedAnotherTag = "";
    },
    fetchGameSortByAnotherTags: (state, action) => {
      state.games = [];
      state.loading = false;
      state.games.push(...action.payload);
    },
    setSelectedAnotherTags: (state, action) => {
      state.selectedAnotherTag = action.payload;
      state.selectedCategory = "";
      state.selectedPlatform = "";
    },
    fetchGameSortByMultipleTag: (state, action) => {
      state.games = [];
      state.loading = false;
      state.games.push(...action.payload);
    },
  },
});

export const gameReducer = gameSlice.reducer;
export const gameActions = gameSlice.actions;
