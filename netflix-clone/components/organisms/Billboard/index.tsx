import React from "react";
import useRandomMovie from "@/hooks/useRandomMovie";
import { AiOutlineInfoCircle } from "react-icons/ai";

const Billboard = () => {
  const { data: randomMovie } = useRandomMovie();
  console.log("randomMovie", randomMovie);

  return (
    <div className={"relative h-[56.25vw] w-screen"}>
      {randomMovie && (
        <>
          <video
            className={"absolute h-full w-full object-cover brightness-[60%]"}
            src={randomMovie.videoUrl}
            autoPlay
            muted
            loop
          />
          <div className={"absolute top-20 z-50 ml-4 md:top-1/4 lg:ml-16"}>
            <p
              className={
                "text-2xl font-bold text-white drop-shadow-xl sm:w-1/2 md:text-5xl md:text-6xl"
              }
            >
              {randomMovie.title}
            </p>
            <p
              className={
                "md:3/4 mt-3 hidden w-4/5 text-xs text-white drop-shadow-xl sm:flex md:mt-8 md:text-lg lg:w-1/2"
              }
            >
              {randomMovie.description}
            </p>
            <button
              className={
                "mt-1 flex items-center gap-2 rounded bg-white bg-opacity-30 py-2 px-5 font-semibold text-white transition hover:bg-opacity-20 sm:mt-5 md:mt-6 md:text-2xl lg:mt-8"
              }
            >
              <AiOutlineInfoCircle />
              <div>More info</div>
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Billboard;
