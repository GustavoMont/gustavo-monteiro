import { Post } from "@/@types/post.type";
import { PostStyleContext } from "@/components/post/style-strategy/PostStyleContext";
import {
  PoetryPostStrategy,
  TextPostStrategy,
} from "@/components/post/style-strategy/Strategies";
import { GetServerSideProps } from "next";
import React from "react";

type Props = {
  post: Post;
};

export default function PostPage({ post }: Props) {
  return (
    <PostStyleContext
      post={post}
      renderers={{
        POETRY: PoetryPostStrategy,
        TEXT: TextPostStrategy,
      }}
    />
  );
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const slug = query.slug;
  if (typeof slug !== "string") {
    return {
      notFound: true,
    };
  }
  const response = await fetch(`${process.env.API_URL}/posts/${slug}`);
  const post: Post = await response.json();

  return {
    props: { post },
  };
};
