import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store/store";
import { useState } from "react";
import { SORT_BY } from "../../helpers/data";
import { fetchSortGameBy } from "../../store/gameActions";

export const SearchSort = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [selectedSortBy, setSelectedSortBy] = useState("");

  const handleSortGames = () => {
    dispatch(fetchSortGameBy(selectedSortBy));
  };
  return (
    <>
      <input
        list="optionsSortBy"
        className="w-full border bg-white border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Choose sort by..."
        value={selectedSortBy}
        onChange={(e) => setSelectedSortBy(e.target.value)}
      />
      <datalist id="optionsSortBy">
        {SORT_BY.map((sortBy) => (
          <option key={sortBy} value={sortBy} />
        ))}
      </datalist>
      <button onClick={handleSortGames} className="bg-white">
        Search!
      </button>
    </>
  );
};
