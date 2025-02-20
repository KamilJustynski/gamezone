import { CategoryFilter } from "./CategoryFilter";
import { PlatformFilter } from "./PlatformFilter";
import { OtherFilter } from "./OtherFilter";
import { MultipleFilter } from "./MultipleFilter";

export const Search = () => {
  return (
    <div className="w-max mb-5 flex gap-5">
      <PlatformFilter />
      <CategoryFilter />
      <OtherFilter />
      <MultipleFilter />
    </div>
  );
};
