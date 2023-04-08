import React, { useState, useEffect } from "react";
import useMovie from "@/hooks/useMovie";
import { useRouter } from "next/router";
import { AiOutlineArrowLeft } from "react-icons/ai";
import routes from "@/routes";

const Movie = () => {
  const { query, push } = useRouter();
  const { data: movie } = useMovie(query?.movieId as string);

  const [showArrow, setShowArrow] = useState(false);

  useEffect(() => {
    let timer: string | number | NodeJS.Timeout | undefined;
    const handleMouseMove = () => {
      setShowArrow(true);
      clearTimeout(timer);
      timer = setTimeout(() => setShowArrow(false), 2000);
    };
    document.addEventListener("mousemove", handleMouseMove);
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className={"relative h-screen bg-black"}>
      {showArrow && (
        <div
          className={
            "absolute left-10 top-10 z-50 flex items-center gap-4 text-white"
          }
        >
          <AiOutlineArrowLeft
            className={"cursor-pointer"}
            size={30}
            onClick={() => push(routes.home)}
          />
          {movie && (
            <div className={"text-xl sm:text-2xl"}>Watching: {movie.title}</div>
          )}
        </div>
      )}
      {movie && (
        <video
          className={"absolute h-full w-full object-cover brightness-[60%]"}
          src={movie.videoUrl}
          autoPlay
          controls
        />
      )}
    </div>
  );
};

export default Movie;
