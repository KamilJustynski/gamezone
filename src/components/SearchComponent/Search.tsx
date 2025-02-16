import { SearchCategory } from "./SearchCategory";
import { SearchPlatform } from "./SearchPlatform";
import { SearchSort } from "./SearchSort";
import { FilterData } from "./FIlterData";

export const Search = () => {
  return (
    <div className="w-max mb-5 flex gap-5">
      <SearchPlatform />
      <SearchCategory />
      <SearchSort />
      <FilterData/>
    </div>
  );
};
