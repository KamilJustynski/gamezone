import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store/store";
import { useState } from "react";
import { fetchGameByCategory } from "../../store/gameActions";
import { CATEGORY } from "../../helpers/data";

export const SearchCategory = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [selectedCategory, setSelectedCategory] = useState("");

  const handleCategoryGame = () => {
    if (selectedCategory) dispatch(fetchGameByCategory(selectedCategory));
  };
  return (
    <>
      <input
        list="optionsCat"
        className="w-full border bg-white border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Choose category..."
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value)}
      />
      <datalist id="optionsCat">
        {CATEGORY.map((cat) => (
          <option key={cat} value={cat} />
        ))}
      </datalist>
      <button onClick={handleCategoryGame} className="bg-white">
        Search!
      </button>
    </>
  );
};
