import { useState } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store/store";
import { fetchMultipleTagGames } from "../../store/gameActions";
import { PLATFORM, CATEGORY } from "../../helpers/data";

export const FilterData = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedPlatform, setSelectedPlatform] = useState("");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const handleSort = () => {
    dispatch(fetchMultipleTagGames(selectedTags, selectedPlatform));
  };

  const handleClick = () => {
    setIsOpen((prevState) => !prevState);
  };

  const handleTagChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = e.target.value;

    setSelectedTags((prevTags) =>
      prevTags.includes(selectedValue)
        ? prevTags.filter((tag) => tag !== selectedValue)
        : [...prevTags, selectedValue]
    );
  };

  const removeTag = (tagToRemove: string) => {
    setSelectedTags((prevTags) =>
      prevTags.filter((tag) => tag !== tagToRemove)
    );
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
              <select
                required
                className="w-full border bg-white border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={selectedPlatform}
                onChange={(e) => setSelectedPlatform(e.target.value)}
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
            </div>

            <div className="mb-3">
              <select
                className="w-full border bg-white border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={selectedTags}
                onChange={handleTagChange}
              >
                <option value="" disabled>
                  Choose tags...
                </option>
                {CATEGORY.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
            </div>

            {selectedTags.length > 0 && (
              <div className="mb-3">
                <h3 className="text-sm font-semibold mb-2">Selected Tags:</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedTags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-blue-200 text-blue-800 px-2 py-1 rounded-full text-sm flex items-center"
                    >
                      {tag}
                      <button
                        onClick={() => removeTag(tag)}
                        className="ml-2 text-red-600 hover:text-red-800 font-bold"
                      >
                        ×
                      </button>
                    </span>
                  ))}
                </div>
              </div>
            )}

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
