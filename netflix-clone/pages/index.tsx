import { GetServerSideProps } from "next";
import serverAuth from "@/lib/serverAuth";
import Navbar from "@/components/organisms/Navbar";
import Billboard from "@/components/organisms/Billboard";
import useMovies from "@/hooks/useMovies";
import { moviesPerPage } from "@/constants";
import Movies from "@/components/organisms/Movies";
import { useState } from "react";
import useFavorites from "@/hooks/useFavorites";
import cx from "classnames";

export const getServerSideProps: GetServerSideProps = async (context) => {
  // ssr added as a proof of concept. I can pass randomMovies as props to Home. Inspired by https://stackoverflow.com/questions/65752932/internal-api-fetch-with-getserversideprops-next-js
  // const count = await prismadb.movie.count();
  // const randomIndex = Math.floor(Math.random() * count);
  // const randomMovies = await prismadb.movie.findMany({
  //   skip: randomIndex,
  //   take: 1,
  // });
  // return {
  //   props: { randomMovies },
  // };
  return serverAuth(context);
};
export default function Home() {
  const [moviesPage, setMoviesPage] = useState(1);
  const [favoriteMoviesPage, setFavoriteMoviesPage] = useState(1);
  const { data: movies, totalCount } = useMovies({
    page: moviesPage,
    perPage: moviesPerPage,
  });
  const { data: favoriteMovies, totalCount: favoriteMoviesTotalCount } =
    useFavorites({
      page: favoriteMoviesPage,
      perPage: moviesPerPage,
    });
  console.log({ favoriteMovies, favoriteMoviesTotalCount });
  return (
    <div className={"relative"}>
      <Navbar />
      <Billboard />
      <div className={"relative mt-3"}>
        <div
          className={cx(
            " mb-4 xl:absolute xl:mb-24",
            favoriteMovies?.length ? "bottom-60" : "-bottom-16"
          )}
        >
          <Movies
            title={"Only on Netflix"}
            movies={movies}
            handlePageChange={(action) =>
              setMoviesPage(action === "next" ? moviesPage + 1 : moviesPage - 1)
            }
            totalCount={totalCount}
            currentPage={moviesPage}
          />
        </div>
        {!!favoriteMovies?.length && (
          <div className={"xl:pt-12"}>
            <Movies
              title={"My list"}
              movies={favoriteMovies}
              handlePageChange={(action) =>
                setFavoriteMoviesPage(
                  action === "next"
                    ? favoriteMoviesPage + 1
                    : favoriteMoviesPage - 1
                )
              }
              totalCount={favoriteMoviesTotalCount}
              currentPage={favoriteMoviesPage}
            />
          </div>
        )}
      </div>

      {/*<LoremIpsum />*/}
    </div>
  );
}
