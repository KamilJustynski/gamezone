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
      <select
        required
        className="w-full border bg-white border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        value={selectedSortBy}
        onChange={(e) => setSelectedSortBy(e.target.value)}
      >
        <option value="" disabled>
          Choose platform...
        </option>
        {SORT_BY.map((platform) => (
          <option key={platform} value={platform}>
            {platform}
          </option>
        ))}
      </select>

      <button onClick={handleSortGames} className="bg-white">
        Search!
      </button>
    </>
  );
};
