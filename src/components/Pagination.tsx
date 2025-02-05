import React from "react";
import { Game } from "../helpers/types";

interface Pagination {
  games: Game[];
  page: number;
  totalPages: number;
  endIndex: number;
  onClickNext: () => void;
  onClickPrev: () => void;
}
export const Pagination: React.FC<Pagination> = ({
  games,
  totalPages,
  page,
  endIndex,
  onClickNext,
  onClickPrev,
}) => {
  return (
    <div className="flex justify-center gap-4 mt-4">
      <button
        className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
        onClick={onClickPrev}
        disabled={page === 1}
      >
        Poprzednia
      </button>

      <span>
        Strona {page} / {totalPages}
      </span>

      <button
        className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
        onClick={onClickNext}
        disabled={endIndex >= games.length}
      >
        Następna
      </button>
    </div>
  );
};
