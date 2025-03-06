import { configureStore } from "@reduxjs/toolkit";
import { gameReducer } from "./gameSlice";
import { gameDetailsReducer } from "./gameDetailsSlice";
import { FavoritesGameReducer } from "./favoritesSlice";

export const store = configureStore({
  reducer: {
    games: gameReducer,
    gameDetails: gameDetailsReducer,
    favorites: FavoritesGameReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
