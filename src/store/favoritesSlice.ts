import { createSlice } from "@reduxjs/toolkit";
import { GameScheme } from "../helpers/types";

type FavoritesState = {
  favorites: GameScheme[];
};

const initialState: FavoritesState = {
  favorites: JSON.parse(localStorage.getItem("favorites") ?? "[]"),
};

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    toggleFavorite: (state, action) => {
      const game: GameScheme = action.payload;
      const exists = state.favorites.some((fav) => fav.id === game.id);

      if (exists) {
        state.favorites = state.favorites.filter((fav) => fav.id !== game.id);
      } else {
        state.favorites.push(game);
      }

      localStorage.setItem("favorites", JSON.stringify(state.favorites));
    },
  },
});

export const FavoritesGameAction = favoritesSlice.actions;
export const FavoritesGameReducer = favoritesSlice.reducer;
