import { Post } from "@/@types/post";
import Link from "next/link";
import { PostMetadata } from "./PostMetadata";

type Props = {
  post: Post;
};

export function PostCard({ post }: Props) {
  const href = `/posts/${post.slug}`;

  return (
    <div className="flex flex-col gap-3 lg:flex-row-reverse">
      <Link href={href} className="aspect-square w-1/2 shrink-0 max-w-36">
        <img
          src={post.banner}
          alt={`Banner do Post ${post.title}`}
          className="aspect-square w-full object-cover rounded-lg hover:scale-105 transition-all duration-150 ease-in-out active:scale-95"
        />
      </Link>
      <div className="flex flex-col w-full">
        <Link
          href={href}
          className="transition duration-150 ease-in-out text-primary hover:text-secondary text-lg"
        >
          <h3>{post.title}</h3>
        </Link>
        <p className="lg:flex-1 max-h-24 truncate text-pretty">
          {post.description}
        </p>
        <PostMetadata type={post.type} writtenAt={post.writtenAt} />
      </div>
    </div>
  );
}
