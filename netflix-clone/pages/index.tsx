import { GetServerSideProps } from "next";
import serverAuth from "@/lib/serverAuth";
import Navbar from "@/components/organisms/Navbar";
import Billboard from "@/components/organisms/Billboard";

export const getServerSideProps: GetServerSideProps = async (context) => {
  return serverAuth(context);
};
export default function Home() {
  return (
    <>
      <Navbar />
      <Billboard />
      {/*<LoremIpsum />*/}
    </>
  );
}
