import { signOut } from "next-auth/react";
import { GetServerSideProps } from "next";
import { useQuery } from "@tanstack/react-query";
import { fetchUser } from "@/api";
import serverAuth from "@/lib/serverAuth";
import { defaultStaleTime } from "@/constants";

export const getServerSideProps: GetServerSideProps = async (context) => {
  return serverAuth(context);
};
export default function Home() {
  const { data: user } = useQuery(["user"], () => fetchUser(), {
    staleTime: defaultStaleTime,
  });
  return (
    <>
      <h1 className={"text-red-500"}>netflix clone {user?.data.name}</h1>
      <button onClick={() => signOut()} className={"bg-white"}>
        Logout
      </button>
    </>
  );
}
