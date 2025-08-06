import { Post } from "@/@types/post";
import { PostCard } from "@/components/posts/PostCard";
import api from "@/infra/api";
import NotFoundPage from "./not-found";

export default async function HomePage() {
  let posts: Post[];
  try {
    const { data } = await api.get<Post[]>("posts");
    posts = data;
  } catch {
    return <NotFoundPage />;
  }

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
