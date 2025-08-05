import { PostCard } from "@/components/posts/PostCard";
import { dummyPosts } from "@/utils/dummy-posts.utils";

export default function HomePage() {
  return (
    <ul className="flex flex-col gap-4 lg:grid lg:grid-cols-2 lg:gap-6">
      {dummyPosts.map((post) => (
        <li key={post.slug}>
          <PostCard post={post} />
        </li>
      ))}
    </ul>
  );
}
