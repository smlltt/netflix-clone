import React, { FC, useState } from "react";
import { Movie } from "@/service/types";
import { AiFillPlayCircle } from "react-icons/ai";
import FavoriteButton from "@/components/atoms/FavoriteButton";
import { useRouter } from "next/router";
import routes from "@/routes";
import { BiChevronDownCircle } from "react-icons/bi";
import MovieModal from "@/components/organisms/MovieModal";

interface MovieCardProps {
  movie: Movie;
}
const MovieCard: FC<MovieCardProps> = ({ movie }) => {
  const router = useRouter();
  const [showInfoModal, setShowInfoModal] = useState(false);
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
          <div className={"flex cursor-pointer"}>
            <AiFillPlayCircle
              size={40}
              onClick={() => router.push(routes.movie(movie.id))}
            />
            <FavoriteButton movieId={movie.id} />
          </div>
          <BiChevronDownCircle
            className={"cursor-pointer text-white"}
            size={40}
            onClick={() => setShowInfoModal(true)}
          />
        </div>
        <div className={"pt-2"}>{movie.duration}</div>
        <div className={"mt-2"}>{movie.genre}</div>
      </div>
      <MovieModal
        isOpen={showInfoModal}
        onClose={() => setShowInfoModal(false)}
        movie={movie}
      />
    </div>
  );
};

export default MovieCard;
