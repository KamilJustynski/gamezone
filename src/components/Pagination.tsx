import React from "react";
import { ArrowRight } from "../img/arrowRight";
import { DoubleArrowRight } from "../img/DoubleArrowRight";
import { ArrowLeft } from "../img/ArrowLeft";
import { DoubleArrowLeft } from "../img/DoubleArrowLeft";
import { Game } from "../helpers/types";

interface Pagination {
  games: Game[];
  page: number;
  totalPages: number;
  endIndex: number;
  onClickNext: () => void;
  onClickPrev: () => void;
  lastPage: () => void;
  firstPage: () => void;
}

export const Pagination: React.FC<Pagination> = ({
  games,
  totalPages,
  page,
  endIndex,
  onClickNext,
  onClickPrev,
  lastPage,
  firstPage,
}) => {
  return (
    <div className="flex justify-center gap-2 items-center text-white mt-5">
      <button
        className="disabled:opacity-50 disabled:pointer-events-none cursor-pointer hover:scale-125 duration-150"
        onClick={firstPage}
        disabled={page === 1}
      >
        <DoubleArrowLeft />
      </button>
      <button
        className="disabled:opacity-50 disabled:pointer-events-none cursor-pointer hover:scale-125 duration-150"
        onClick={onClickPrev}
        disabled={page === 1}
      >
        <ArrowLeft />
      </button>

      <span className="text-xs">
        Page {page} / {totalPages}
      </span>

      <button
        className="disabled:opacity-50 disabled:pointer-events-none cursor-pointer hover:scale-125 duration-150"
        onClick={onClickNext}
        disabled={endIndex >= games.length}
      >
        <ArrowRight />
      </button>
      <button
        className="disabled:opacity-50 disabled:pointer-events-none cursor-pointer hover:scale-125 duration-150"
        onClick={lastPage}
        disabled={endIndex >= games.length}
      >
        <DoubleArrowRight />
      </button>
    </div>
  );
};
