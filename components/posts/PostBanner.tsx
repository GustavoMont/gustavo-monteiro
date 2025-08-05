import { Post } from "@/@types/post";
import { PostMetadata } from "./PostMetadata";

type Props = {
  post: Post;
};

export function PostBanner({ post }: Props) {
  return (
    <div className="flex aspect-video rounded-lg overflow-hidden w-full max-w-4xl relative mb-4">
      <img
        src={post.banner}
        alt={`Banner do post ${post.title}`}
        className="absolute w-full h-full object-fit"
      />
      <div className="w-full h-full absolute bg-gradient-to-b from-transparent via-base-100/95 to-base-100" />
      <div className="flex justify-center flex-col w-full p-2 z-10">
        <h1 className="flex items-center justify-center flex-1 text-primary text-2xl font-semibold">
          {post.title}
        </h1>
        <div className="self-start">
          <PostMetadata type={post.type} writtenAt={post.writtenAt} />
        </div>
      </div>
    </div>
  );
}
