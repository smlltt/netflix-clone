import { NextApiRequest, NextApiResponse } from "next";
import clientAuth from "@/lib/clientAuth";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "GET") {
    return res.status(405).end();
  }
  try {
    const { user } = await clientAuth(req);
    return res.status(200).json(user);
  } catch (error) {
    console.log("user error", error);
    return res.status(400).end();
  }
}
