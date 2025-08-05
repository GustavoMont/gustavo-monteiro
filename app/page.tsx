import { PostCard } from "@/components/posts/PostCard";
import post from "@/models/post";

export default async function HomePage() {
  const posts = await post.listPosts();
  return (
    <ul className="flex flex-col gap-4 lg:grid lg:grid-cols-2 lg:gap-6">
      {posts.map((post) => (
        <li key={post.slug}>
          <PostCard post={post} />
        </li>
      ))}
    </ul>
  );
}
