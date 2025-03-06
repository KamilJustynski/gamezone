import { createSlice } from "@reduxjs/toolkit";

type FavoritesState = {
  favorites: string[];
};

const initialState: FavoritesState = {
  favorites: JSON.parse(localStorage.getItem("favorites") ?? "[]"),
};

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    toggleFavorite: (state, action) => {
      const gameId = action.payload;
      if (state.favorites.includes(gameId)) {
        state.favorites = state.favorites.filter((id) => id !== gameId);
      } else {
        state.favorites.push(gameId);
      }

      localStorage.setItem("favorites", JSON.stringify(state.favorites));
    },
  },
});

export const FavoritesGameAction = favoritesSlice.actions;
export const FavoritesGameReducer = favoritesSlice.reducer;
