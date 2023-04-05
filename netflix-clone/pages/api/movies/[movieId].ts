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
    const { movieId } = req.query;

    if (typeof movieId !== "string") {
      throw new Error("Invalid ID");
    }

    if (!movieId) {
      throw new Error("Invalid ID");
    }

    const movie = await prismadb.movie.findUnique({
      where: { id: movieId },
    });

    return res.status(200).json(movie);
  } catch (error) {
    console.log("user error", error);
    return res.status(500).end();
  }
}
