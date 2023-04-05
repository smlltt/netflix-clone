import React from "react";
import useRandomMovie from "@/hooks/useRandomMovie";
import { AiOutlineInfoCircle } from "react-icons/ai";
import MainButtonWithIcon from "@/components/atoms/MainButtonWithIcon";
import { BsPlayFill } from "react-icons/bs";
import SecondaryButtonWithIcon from "@/components/atoms/SecondaryButtonWithIcon";
import { useRouter } from "next/router";
import routes from "@/routes";

const Billboard = () => {
  const { data: randomMovie } = useRandomMovie();
  const router = useRouter();

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
          <div className={"absolute top-20 z-10 ml-4 md:top-1/4 lg:ml-16"}>
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
            <div className={"flex gap-3"}>
              <MainButtonWithIcon
                icon={BsPlayFill}
                text={"Play"}
                onClick={() => router.push(routes.movie(randomMovie?.id || ""))}
              />
              <SecondaryButtonWithIcon
                icon={AiOutlineInfoCircle}
                text={"More info"}
              />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Billboard;
