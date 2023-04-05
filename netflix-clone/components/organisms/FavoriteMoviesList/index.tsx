import React, { useState } from "react";
import Movies from "@/components/organisms/Movies";
import useFavorites from "@/hooks/useFavorites";
import { moviesPerPage } from "@/constants";

const FavoriteMoviesList = () => {
  const [page, setPage] = useState(1);
  const { data: favoriteMovies, totalCount } = useFavorites({
    page,
    perPage: moviesPerPage,
  });
  return (
    <Movies
      title={"My list"}
      movies={favoriteMovies}
      handlePageChange={(action) =>
        setPage(action === "next" ? page + 1 : page - 1)
      }
      totalCount={totalCount}
      currentPage={page}
    />
  );
};

export default FavoriteMoviesList;
