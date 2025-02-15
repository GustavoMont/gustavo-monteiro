import { Post, PostType } from "@/@types/post.type";
import React from "react";

export type PostStrategy = React.FC<{ post: Post }>;

type Props = {
  post: Post;
  renderers: Record<PostType, PostStrategy>;
};

export const PostStyleContext = ({ post, renderers }: Props) => {
  const Renderer = renderers[post.type];

  return <Renderer post={post} />;
};
