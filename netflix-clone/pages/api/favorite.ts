import { NextApiRequest, NextApiResponse } from "next";
import prismadb from "@/lib/prismadb";
import clientAuth from "@/lib/clientAuth";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    if (req.method === "POST") {
      const { user } = await clientAuth(req);
      const { movieId } = req.body;
      const existingMovie = await prismadb.movie.findUnique({
        where: {
          id: movieId,
        },
      });

      if (!existingMovie) {
        throw new Error("Invalid ID");
      }
      const updatedUser = await prismadb.user.update({
        where: {
          email: user.email || "",
        },
        data: {
          favoriteIds: {
            push: movieId,
          },
        },
      });

      return res.status(200).json(updatedUser);
    }

    if (req.method === "DELETE") {
      const { user } = await clientAuth(req);

      const { movieId } = req.body;

      const existingMovie = await prismadb.movie.findUnique({
        where: {
          id: movieId,
        },
      });

      if (!existingMovie) {
        throw new Error("Invalid ID");
      }

      const updatedUser = await prismadb.user.update({
        where: {
          email: user.email || "",
        },
        data: {
          favoriteIds: {
            set: user.favoriteIds.filter((id) => id !== movieId),
          },
        },
      });

      return res.status(200).json(updatedUser);
    }

    return res.status(405).end();
  } catch (error) {
    console.log(error);

    return res.status(500).end();
  }
}
