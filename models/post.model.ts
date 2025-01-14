import { Post } from "@/@types/post.type";
import { getPosts } from "@/infra/scripts/getPosts";

export class PostModel {
  async list(): Promise<Omit<Post, "content">[]> {
    const posts = await getPosts();
    return posts.map((post) => ({ ...post, content: undefined }));
  }
}
