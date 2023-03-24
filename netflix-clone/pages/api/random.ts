import { NextApiRequest, NextApiResponse } from "next";
import clientAuth from "@/lib/clientAuth";
import prismadb from "@/lib/prismadb";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "GET") {
    return res.status(405).end();
  }
  try {
    await clientAuth(req);
    const count = await prismadb.movie.count();
    const randomIndex = Math.floor(Math.random() * count);
    const randomMovies = await prismadb.movie.findMany({
      skip: randomIndex,
      take: 1,
    });
    return res.status(200).json(randomMovies[0]);
  } catch (error) {
    console.log("user error", error);
    return res.status(400).end();
  }
}
