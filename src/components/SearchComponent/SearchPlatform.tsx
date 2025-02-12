import { useState } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store/store";
import { fetchGameByPlatform } from "../../store/gameActions";
import { PLATFORM } from "../../helpers/data";

export const SearchPlatform = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [selectedPlatform, setSelectedPlatform] = useState("");

  const handlePlatform = () => {
    if (selectedPlatform) dispatch(fetchGameByPlatform(selectedPlatform));
  };

  return (
    <>
      <input
        list="options"
        className="w-full border bg-white border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Choose platform..."
        value={selectedPlatform}
        onChange={(e) => setSelectedPlatform(e.target.value)}
      />
      <datalist id="options">
        {PLATFORM.map((platform) => (
          <option key={platform} value={platform} />
        ))}
      </datalist>
      <button onClick={handlePlatform} className="bg-white">
        Search!
      </button>
    </>
  );
};
