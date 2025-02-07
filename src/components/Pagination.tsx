import React from "react";
import { PaginationScheme } from "../helpers/types";
import { ArrowRight } from "../img/ArrowRight";
import { DoubleArrowRight } from "../img/DoubleArrowRight";
import { ArrowLeft } from "../img/ArrowLeft";
import { DoubleArrowLeft } from "../img/DoubleArrowLeft";

export const Pagination: React.FC<PaginationScheme> = ({
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
