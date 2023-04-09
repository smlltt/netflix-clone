import React, { FC } from "react";
import Modal from "@/components/atoms/Modal";
import MainButtonWithIcon from "@/components/atoms/MainButtonWithIcon";
import { BsPlayFill } from "react-icons/bs";
import routes from "@/routes";
import { Movie } from "@/service/types";
import { useRouter } from "next/router";
import FavoriteButton from "@/components/atoms/FavoriteButton";

interface MovieModalProps {
  isOpen: boolean;
  onClose: () => void;
  movie: Movie;
}
const MovieModal: FC<MovieModalProps> = ({ isOpen, onClose, movie }) => {
  const router = useRouter();
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className={"relative h-96"}>
        <video
          className={"h-full w-full rounded-t object-cover brightness-[60%]"}
          src={movie.videoUrl}
          autoPlay
          muted
          loop
        />
        <div className={"absolute left-10 bottom-10 flex gap-2"}>
          <MainButtonWithIcon
            icon={BsPlayFill}
            text={"Play"}
            onClick={() => router.push(routes.movie(movie?.id || ""))}
          />
          <div className={"mt-9"}>
            <FavoriteButton movieId={movie.id} className={"text-white"} />
          </div>
        </div>
        <div className={"bg-zinc-900 p-6 text-white"}>
          <div>{movie.duration}</div>
          <div>{movie.genre}</div>
          <div className={"pt-2"}>{movie.description}</div>
        </div>
      </div>
    </Modal>
  );
};

export default MovieModal;
