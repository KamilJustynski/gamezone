import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store/store";
import { fetchGameByPlatform } from "../../store/gameActions";
import { PLATFORM } from "../../helpers/data";
import { gameActions } from "../../store/gameSlice";

export const PlatformFilter = () => {
  const dispatch = useDispatch<AppDispatch>();
  const selectedPlatform = useSelector(
    (state: RootState) => state.games.selectedPlatform
  );

  const handleSelectedPlatform = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(gameActions.setSelectedPlatform(e.target.value));
  };

  const handlePlatform = () => {
    if (selectedPlatform) dispatch(fetchGameByPlatform(selectedPlatform));
  };

  return (
    <>
      <select
        required
        className="w-full border bg-white h-10 border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        value={selectedPlatform}
        onChange={handleSelectedPlatform}
      >
        <option value="" disabled>
          Choose platform...
        </option>
        {PLATFORM.map((platform) => (
          <option key={platform} value={platform}>
            {platform}
          </option>
        ))}
      </select>

      <button onClick={handlePlatform} className="info-element">
        Search!
      </button>
    </>
  );
};
