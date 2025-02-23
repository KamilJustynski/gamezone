import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store/store";
import React from "react";
import { SORT_BY } from "../../helpers/data";
import { fetchSortGameBy } from "../../store/gameActions";
import { gameActions } from "../../store/gameSlice";

export const OtherFilter = () => {
  const dispatch = useDispatch<AppDispatch>();
  const selectedAnotherTag = useSelector(
    (state: RootState) => state.games.selectedAnotherTag
  );

  const handleSelectedAnotherTag = (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    dispatch(gameActions.setSelectedAnotherTags(e.target.value));
  };

  const handleSortGames = () => {
    dispatch(fetchSortGameBy(selectedAnotherTag));
  };
  return (
    <>
      <select
        required
        className="w-full border bg-white border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        value={selectedAnotherTag}
        onChange={handleSelectedAnotherTag}
      >
        <option value="" disabled>
          Choose others...
        </option>
        {SORT_BY.map((sort) => (
          <option key={sort} value={sort}>
            {sort}
          </option>
        ))}
      </select>

      <button
        onClick={handleSortGames}
        className="bg-[#155DFC] h-10 rounded-lg px-2 cursor-pointer"
      >
        Search!
      </button>
    </>
  );
};
