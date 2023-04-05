import React, { useState } from "react";
import useMovies from "@/hooks/useMovies";
import { moviesPerPage } from "@/constants";
import Movies from "@/components/organisms/Movies";

const MainMovieList = () => {
  const [page, setPage] = useState(1);
  const { data: movies, totalCount } = useMovies({
    page,
    perPage: moviesPerPage,
  });
  return (
    <Movies
      title={"Only on Netflix"}
      movies={movies}
      handlePageChange={(action) =>
        setPage(action === "next" ? page + 1 : page - 1)
      }
      totalCount={totalCount}
      currentPage={page}
    />
  );
};

export default MainMovieList;
