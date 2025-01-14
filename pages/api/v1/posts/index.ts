import { PostModel } from "@/models/post.model";
import { NextApiRequest, NextApiResponse } from "next";

export default async function posts(req: NextApiRequest, res: NextApiResponse) {
  try {
    const postModel = new PostModel();
    return res.status(200).json(await postModel.list());
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Ocorreu um erro" });
  }
}
