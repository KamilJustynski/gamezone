import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store/store";
import { useState } from "react";
import { SORT_BY } from "../../helpers/data";
import { fetchSortGameBy } from "../../store/gameActions";

export const OtherFilter = () => {
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
