import { Post } from "@/@types/post";
import post from "@/models/post";
import { NextRequest } from "next/server";

type Params = { slug: string };

type GetDataParams = {
  params: Promise<Params>;
};

export async function GET(request: NextRequest, { params }: GetDataParams) {
  const { slug } = await params;

  let foundPost: Post;
  try {
    foundPost = await post.findBySlug(slug);
  } catch (error) {
    return Response.json(error, { status: 404 });
  }
  return Response.json(foundPost);
}
