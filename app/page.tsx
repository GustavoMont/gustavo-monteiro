import { PostCard } from "@/components/posts/PostCard";
import post from "@/models/post";

export default async function HomePage() {
  const posts = await post.listPosts();

  if (!posts.length) {
    return (
      <div className="flex flex-col flex-1 gap-2 items-center justify-center">
        <p className="text-primary text-xl text-center">
          Putz, parece que ainda não publiquei nada meu chefe
        </p>
        <span>Mas daqui a pouco vai ter, te juro \ (•◡•) /</span>
      </div>
    );
  }

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
