import React from "react";
import { GetServerSideProps } from "next";
import serverAuth from "@/lib/serverAuth";
import { useQuery } from "@tanstack/react-query";
import { fetchUser } from "@/api";
import { defaultStaleTime } from "@/constants";
import { useRouter } from "next/router";
import routes from "@/routes";

export const getServerSideProps: GetServerSideProps = async (context) => {
  return serverAuth(context);
};
const Profiles = () => {
  const router = useRouter();
  const { data: user } = useQuery(["user"], () => fetchUser(), {
    staleTime: defaultStaleTime,
  });
  return (
    <div className={"flex justify-center items-center h-screen flex-col mx-11"}>
      <div
        className={
          "text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center mb-4 md:mb-6 lg:mb-8 xl:mb-10"
        }
      >
        Who's watching?
      </div>

      <div
        className={
          "flex flex-row flex-wrap justify-center gap-2 sm:gap-3 md:gap-4 lg:gap-5 xl:gap-6"
        }
      >
        <div
          className={
            "flex flex-col w-20 sm:w-24 md:w-28 lg:w-32 xl:w-44 cursor-pointer group "
          }
          onClick={() => router.push(routes.home)}
        >
          <img
            src={"./images/default-profile-image.png"}
            className={
              "rounded h-20 sm:h-24 md:h-28 lg:h-32 xl:h-44  group-hover:border-white  border-transparent border-2 xl:border-4"
            }
            alt={"Profile"}
          />
          <div
            className={
              "text-neutral-500 text-center mt-2 text-xs md:text-base lg:text-xl xl:text-2xl xl:mt-3 group-hover:text-white"
            }
          >
            {user?.data.name}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profiles;
