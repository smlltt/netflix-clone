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
          "duration h-[12vw] w-96 cursor-pointer rounded-md object-cover shadow-xl transition group-hover:opacity-90 sm:group-hover:opacity-0"
        }
      />

      <div
        className={
          "duration transition-200 invisible absolute top-0 z-10 w-full scale-0 opacity-0 delay-200 group-hover:-translate-y-[6vw] group-hover:scale-125 group-hover:opacity-100 sm:visible"
        }
      >
        <img
          src={movie.thumbnailUrl}
          alt={"thumbnail"}
          className={
            "duration h-[12vw] w-full cursor-pointer rounded-t-md object-cover shadow-xl transition"
          }
        />
        <div
          className={
            "absolute z-10 w-full rounded-b-md bg-zinc-800 p-2 shadow-md transition lg:p-4"
          }
        >
          <div className={"flex items-center justify-between"}>
            <AiFillPlayCircle size={40} />
            <div>{movie.duration}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
