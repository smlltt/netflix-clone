import React from "react";
import { GetServerSideProps } from "next";
import serverAuth from "@/lib/serverAuth";
import { useRouter } from "next/router";
import routes from "@/routes";
import useUser from "@/hooks/useUser";

export const getServerSideProps: GetServerSideProps = async (context) => {
  return serverAuth(context);
};
const Profiles = () => {
  const router = useRouter();
  const { data: user } = useUser();
  return (
    <div className={"mx-11 flex h-screen flex-col items-center justify-center"}>
      <div
        className={
          "mb-4 text-center text-3xl text-white sm:text-4xl md:mb-6 md:text-5xl lg:mb-8 lg:text-6xl xl:mb-10"
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
            "group flex w-20 cursor-pointer flex-col sm:w-24 md:w-28 lg:w-32 xl:w-44 "
          }
          onClick={() => router.push(routes.home)}
        >
          <img
            src={"./images/default-profile-image.png"}
            className={
              "h-20 rounded border-2 border-transparent group-hover:border-white sm:h-24  md:h-28  lg:h-32 xl:h-44 xl:border-4"
            }
            alt={"Profile"}
          />
          <div
            className={
              "mt-2 text-center text-xs text-neutral-500 group-hover:text-white md:text-base lg:text-xl xl:mt-3 xl:text-2xl"
            }
          >
            {user?.name}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profiles;
