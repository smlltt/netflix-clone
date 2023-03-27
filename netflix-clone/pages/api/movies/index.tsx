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
    const { page, perPage = 10 } = req.query;
    const movies = await prismadb.movie.findMany({
      skip: (Number(page) - 1) * Number(perPage),
      take: Number(perPage),
    });

    return res.status(200).json(movies);
  } catch (error) {
    console.log("user error", error);
    return res.status(400).end();
  }
}
