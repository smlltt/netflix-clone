import React, { FC } from "react";
import { Movie } from "@/api/types";
import { AiFillPlayCircle } from "react-icons/ai";

interface MovieCardProps {
  movie: Movie;
}
const MovieCard: FC<MovieCardProps> = ({ movie }) => {
  return (
    <div className={"col-span group relative h-[12vw] text-white"}>
      <img
        src={movie.thumbnailUrl}
        alt={"thumbnail"}
        className={
          "duration h-[12vw] w-96 transform cursor-pointer rounded-md object-cover shadow-xl transition  duration-500 group-hover:-translate-y-[6vw] group-hover:scale-110 group-hover:opacity-90"
        }
      />
      <div
        className={
          "absolute z-10 w-full rounded-b-md bg-zinc-800 p-2 opacity-0 shadow-md transition duration-500 group-hover:-translate-y-[6vw] group-hover:scale-110 group-hover:opacity-100 lg:p-4"
        }
      >
        <div className={"flex items-center justify-between"}>
          <AiFillPlayCircle size={40} />
          <div>{movie.duration}</div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
