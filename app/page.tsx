import { Post, PostTypeEnum } from "@/@types/post";
import { PostCard } from "@/components/posts/PostCard";

const dummyPosts: Post[] = Array.from({ length: 6 }).map((_, i) => ({
  slug: `post-${i}`,
  description: `Lorem ipsum dolor sit amet consectetur. Aliquam faucibus tempor cursus id. ${i}`,
  title: `Post ${i}`,
  type: i % 2 === 0 ? PostTypeEnum.POETRY : PostTypeEnum.TEXT,
  writtenAt: new Date().toISOString(),
  banner: "https://picsum.photos/600",
}));

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
