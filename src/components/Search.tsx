import { useRef } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../store/store";
import { fetchSortGame } from "../store/gameActions";
import { PLATFORM } from "../helpers/data";

export const Search = () => {
  const dispatch = useDispatch<AppDispatch>();
  const ref = useRef<HTMLOptionElement>(null);

  const handleSortGames = () => {
    if (ref.current) dispatch(fetchSortGame(ref.current.value));
  };
  return (
    <div className="relative w-64 mb-5 flex gap-5">
      <input
        list="options"
        className="w-full border bg-white border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Wybierz opcję..."
      />
      <datalist id="options">
        {PLATFORM.map((platform) => (
          <option ref={ref} value={platform} />
        ))}
      </datalist>
      <button onClick={handleSortGames} className="bg-white">
        Search!
      </button>
    </div>
  );
};
