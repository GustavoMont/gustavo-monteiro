import post from "@/models/post";

export async function GET() {
  const posts = await post.listPosts();
  return Response.json(posts);
}
