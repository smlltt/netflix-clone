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
    const { page, perPage = 4 } = req.query;
    const skip = (Number(page) - 1) * Number(perPage);
    const take = Number(perPage);

    const [movies, totalCount] = await Promise.all([
      prismadb.movie.findMany({ skip, take }),
      prismadb.movie.count(),
    ]);

    return res.status(200).json({ movies, totalCount });
  } catch (error) {
    console.log("user error", error);
    return res.status(400).end();
  }
}
