import { GetServerSideProps } from "next";
import serverAuth from "@/lib/serverAuth";
import Navbar from "@/components/organisms/Navbar";
import LoremIpsum from "@/components/atoms/LoremIpsum";

export const getServerSideProps: GetServerSideProps = async (context) => {
  return serverAuth(context);
};
export default function Home() {
  return (
    <>
      <Navbar />
      <LoremIpsum />
    </>
  );
}
