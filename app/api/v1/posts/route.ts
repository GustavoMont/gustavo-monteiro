import post from "@/models/post";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const exclude = request.nextUrl.searchParams.get("exclude") || undefined;

  const posts = await post.listPosts({ exclude });
  return Response.json(posts);
}
