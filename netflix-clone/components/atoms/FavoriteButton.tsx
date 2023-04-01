import React, { FC, useEffect, useState } from "react";
import { AiOutlinePlusCircle, AiOutlineCheckCircle } from "react-icons/ai";
import useAddMovieToFavs from "@/hooks/useAddMovieToFavs";
import useDeleteMovieFromFavs from "@/hooks/useDeleteMovieFromFavs";
import useUser from "@/hooks/useUser";
import cx from "classnames";

interface FavoriteButtonProps {
  movieId: string;
}
const FavoriteButton: FC<FavoriteButtonProps> = ({ movieId }) => {
  const { add, beingAdded } = useAddMovieToFavs();
  const { remove, beingRemoved } = useDeleteMovieFromFavs();
  const { data: user } = useUser();
  const [isFavorite, setIsFavorite] = useState(false);
  const favoriteIds = user?.favoriteIds;

  useEffect(() => {
    if (favoriteIds) {
      favoriteIds.includes(movieId)
        ? setIsFavorite(true)
        : setIsFavorite(false);
    }
  }, [favoriteIds]);

  return (
    <div
      className={cx(
        "cursor-pointer",
        (beingAdded || beingRemoved) && "opacity-70"
      )}
    >
      {isFavorite ? (
        <AiOutlineCheckCircle
          size={40}
          onClick={() => !beingRemoved && remove(movieId)}
        />
      ) : (
        <AiOutlinePlusCircle
          size={40}
          onClick={() => !beingAdded && add(movieId)}
        />
      )}
    </div>
  );
};

export default FavoriteButton;
