import React, { FC } from "react";
import { Movie } from "@/api/types";
import MovieCard from "@/components/molecules/MovieCard";
import PaginationButton from "@/components/organisms/Movies/PaginationButton";
import getPaginationButtons from "@/utils/getPaginationButtons";
import { moviesPerPage } from "@/constants";

interface MoviesProps {
  title: string;
  movies?: Movie[];
  handlePageChange: (action: "next" | "previous") => void;
  totalCount: number;
  currentPage: number;
}
const Movies: FC<MoviesProps> = ({
  title,
  movies,
  handlePageChange,
  currentPage,
  totalCount,
}) => {
  const paginationButtons = getPaginationButtons(
    totalCount,
    currentPage,
    moviesPerPage
  );
  if (!movies) return null;
  return (
    <div className={"z-50 w-full px-4 lg:px-16"}>
      <div className={"mb-2 font-semibold text-white md:text-xl lg:text-2xl"}>
        {title}
      </div>
      <div className={"relative mr-16 flex w-full items-center gap-4"}>
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
        {paginationButtons.showNext && (
          <PaginationButton
            handleClick={() => handlePageChange("next")}
            buttonType={"next"}
          />
        )}
        {paginationButtons.showPrevious && (
          <PaginationButton
            handleClick={() => handlePageChange("previous")}
            buttonType={"previous"}
          />
        )}
      </div>
    </div>
  );
};

export default Movies;
