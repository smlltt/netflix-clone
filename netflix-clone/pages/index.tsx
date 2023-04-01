import { GetServerSideProps } from "next";
import serverAuth from "@/lib/serverAuth";
import Navbar from "@/components/organisms/Navbar";
import Billboard from "@/components/organisms/Billboard";
import useMovies from "@/hooks/useMovies";
import { moviesPerPage } from "@/constants";
import Movies from "@/components/organisms/Movies";
import { useState } from "react";
import getPaginationButtons from "@/utils/getPaginationButtons";

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
  const [page, setPage] = useState(1);
  const { data: movies, totalCount } = useMovies({
    page,
    perPage: moviesPerPage,
  });

  const paginationButtons = getPaginationButtons(
    totalCount,
    page,
    moviesPerPage
  );

  return (
    <div className={"relative"}>
      <Navbar />
      <Billboard />
      <div className={"-bottom-28 mt-3 w-full lg:absolute"}>
        <Movies
          title={"Only on Netflix"}
          movies={movies}
          handlePageChange={(action) =>
            setPage(action === "next" ? page + 1 : page - 1)
          }
          paginationButtons={paginationButtons}
        />
      </div>
      {/*<LoremIpsum />*/}
    </div>
  );
}
