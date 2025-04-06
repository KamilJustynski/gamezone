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
        className={`w-full border ${selectedAnotherTag === "" ? "text-gray-400" : "text-black"} bg-white border-gray-300 rounded-lg p-2`}
        value={selectedAnotherTag}
        onChange={handleSelectedAnotherTag}
      >
        <option className="text-red-500" value="" disabled>
          Choose others...
        </option>
        {SORT_BY.map((sort) => (
          <option key={sort} value={sort}>
            {sort}
          </option>
        ))}
      </select>

      <button onClick={handleSortGames} className="info-element">
        Search!
      </button>
    </>
  );
};
