import { GetServerSideProps } from "next";
import serverAuth from "@/lib/serverAuth";
import Navbar from "@/components/organisms/Navbar";
import Billboard from "@/components/organisms/Billboard";
import { moviesPerPage } from "@/constants";
import useFavorites from "@/hooks/useFavorites";
import cx from "classnames";
import MainMovieList from "@/components/organisms/MainMovieList";
import FavoriteMoviesList from "@/components/organisms/FavoriteMoviesList";

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
  const { data: favoriteMovies } = useFavorites({
    page: 1,
    perPage: moviesPerPage,
  });

  return (
    <div className={"relative"}>
      <Navbar />
      <Billboard />
      <div className={"relative mt-3"}>
        <div
          className={cx(
            "mb-4 xl:absolute xl:mb-24",
            favoriteMovies?.length ? "bottom-60" : "-bottom-16"
          )}
        >
          <MainMovieList />
        </div>
        {!!favoriteMovies?.length && (
          <div className={"xl:pt-12"}>
            <FavoriteMoviesList />
          </div>
        )}
      </div>

      {/*<LoremIpsum />*/}
    </div>
  );
}
