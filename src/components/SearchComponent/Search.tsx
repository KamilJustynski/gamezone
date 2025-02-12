import { SearchCategory } from "./SearchCategory";
import { SearchPlatform } from "./SearchPlatform";
import { SearchSort } from "./SearchSort";

export const Search = () => {
  return (
    <div className="relative w-max mb-5 flex gap-5">
      <SearchPlatform />
      <SearchCategory />
      <SearchSort />
    </div>
  );
};
