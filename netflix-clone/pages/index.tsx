import { useSession } from "next-auth/react";

export default function Home() {
  const session = useSession();
  console.log("session", session);
  return (
    <>
      <h1 className={"text-red-500"}>netflix clone</h1>
    </>
  );
}
