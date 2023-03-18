import { NextApiRequest } from "next";
import { getSession } from "next-auth/react";
import prismadb from "@/lib/prismadb";

const clientAuth = async (req: NextApiRequest) => {
  const session = await getSession({ req });
  const email = session?.user?.email;
  if (!email) {
    throw new Error("Not signed in");
  }
  const user = await prismadb.user.findUnique({
    where: {
      email,
    },
  });
  if (!user) {
    throw new Error("Not signed in");
  }
  return { user };
};

export default clientAuth;
