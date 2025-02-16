import { useState } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store/store";
import { fetchMultipleTagGames } from "../../store/gameActions";
import { PLATFORM, CATEGORY } from "../../helpers/data";

export const FilterData = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedPlatform, setSelectedPlatform] = useState("");
  const [selectedTag, setSelectedTag] = useState("");

  const handleSort = () => {
    dispatch(fetchMultipleTagGames(selectedTag, selectedPlatform));
  };

  const handleClick = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <>
      <button onClick={handleClick} className="bg-white p-5">
        Filter
      </button>

      {isOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/70"
            onClick={handleClick}
          ></div>

          <div className="fixed left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-8 rounded-lg shadow-lg w-80">
            <h2 className="text-lg font-bold mb-4">Filter Options</h2>

            <div className="mb-3">
              <input
                list="optionsPlat"
                className="w-full border bg-white border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Choose platform..."
                value={selectedPlatform}
                onChange={(e) => setSelectedPlatform(e.target.value)}
              />
              <datalist id="optionsPlat">
                {PLATFORM.map((platform) => (
                  <option key={platform} value={platform} />
                ))}
              </datalist>
            </div>

            <div className="mb-3">
              <input
                list="optionsCat"
                className="w-full border bg-white border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Choose platform..."
                value={selectedTag}
                onChange={(e) => setSelectedTag(e.target.value)}
              />
              <datalist id="optionsCat">
                {CATEGORY.map((cat) => (
                  <option key={cat} value={cat} />
                ))}
              </datalist>
            </div>

            <button
              onClick={handleSort}
              className="w-full mt-4 bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
            >
              Search
            </button>
          </div>
        </>
      )}
    </>
  );
};
