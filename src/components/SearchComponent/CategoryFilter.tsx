import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store/store";
import { fetchGameByCategory } from "../../store/gameActions";
import { CATEGORY } from "../../helpers/data";
import { gameActions } from "../../store/gameSlice";

export const CategoryFilter = () => {
  const dispatch = useDispatch<AppDispatch>();

  const selectedCategory = useSelector(
    (state: RootState) => state.games.selectedCategory
  );

  const handleSelectedCategory = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(gameActions.setSelectedCategory(e.target.value));
  };

  const handleCategoryGame = () => {
    if (selectedCategory) dispatch(fetchGameByCategory(selectedCategory));
  };

  return (
    <>
      <select
        required
        className="w-full border bg-white border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        value={selectedCategory}
        onChange={handleSelectedCategory}
      >
        <option value="" disabled>
          Choose category...
        </option>
        {CATEGORY.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>

      <button
        onClick={handleCategoryGame}
        className="bg-[#155DFC] h-10 rounded-lg px-2 cursor-pointer"
      >
        Search!
      </button>
    </>
  );
};
