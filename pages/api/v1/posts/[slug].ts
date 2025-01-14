import { PostModel } from "@/models/post.model";
import { NextApiRequest, NextApiResponse } from "next";

export default async function post(req: NextApiRequest, res: NextApiResponse) {
  const allowedMethods = ["GET"];
  if (!allowedMethods.includes(req.method)) {
    return res.status(405).json({ message: "Method not allowed" });
  }
  try {
    const params = req.query;
    if (!("slug" in params) || typeof params.slug !== "string") {
      return res
        .status(400)
        .json({ message: "É necessário informar o slug do post" });
    }
    const postModel = new PostModel();
    return res.status(200).json(await postModel.retrieve(params.slug));
  } catch (error) {
    console.error(error);
    return res.status(404).json({ message: "Post não encontrado" });
  }
}
