import React, { FC } from "react";
import { Movie } from "@/api/types";
import MovieCard from "@/components/molecules/MovieCard";

interface MoviesProps {
  title: string;
  movies?: Movie[];
}
const Movies: FC<MoviesProps> = ({ title, movies }) => {
  if (!movies) return null;
  return (
    <div className={"z-50 w-full px-4 lg:px-16"}>
      <div className={"mb-2 font-semibold text-white md:text-xl lg:text-2xl"}>
        {title}
      </div>
      <div className={"mr-16 flex w-full justify-between gap-2"}>
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default Movies;
