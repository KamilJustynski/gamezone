import { CategoryFilter } from "./CategoryFilter";
import { PlatformFilter } from "./PlatformFilter";
import { OtherFilter } from "./OtherFilter";
import { MultipleFilter } from "./MultipleFilter";
import React from "react";

interface Scheme {
  term: string;
  setTerm: (term: string) => void;
}

export const Search: React.FC<Scheme> = ({ term, setTerm }) => {
  return (
    <div className="w-full mb-5 flex gap-5 justify-between items-center">
      <div className="flex gap-5">
        <PlatformFilter />
        <CategoryFilter />
        <OtherFilter />
      </div>
      <div className="flex gap-5 items-center">
        <MultipleFilter />
        <input
          type="text"
          value={term}
          onChange={(e) => setTerm(e.target.value)}
          placeholder="Search game..."
          className="p-2 border rounded w-[200px] bg-white"
        />
      </div>
    </div>
  );
};
