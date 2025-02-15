import { Post } from "@/@types/post.type";
import { Avatar } from "@/components/Avatar";
import { HR } from "@/components/post/poetry/HR";
import { PostStyleContext } from "@/components/post/style-strategy/PostStyleContext";
import {
  PoetryPostStrategy,
  TextPostStrategy,
} from "@/components/post/style-strategy/Strategies";
import { SocialLinks } from "@/components/SocialLinks";
import { getPostTypeName } from "@/utils/post.utils";
import { GetServerSideProps } from "next";
import Head from "next/head";
import Link from "next/link";
import React from "react";

type Props = {
  post: Post;
};

export default function PostPage({ post }: Props) {
  return (
    <>
      <Head>
        <title>
          {getPostTypeName(post.type)}: {post.title} - Gustavo Monteiro
        </title>
        <meta name="description" content={post.description} />
      </Head>
      <header className="flex flex-col gap-3 mb-5">
        <div className="flex gap-2 items-center">
          <Link href={"/"}>
            <Avatar
              src="/assets/perfil-gustavo-monteiro.jpg"
              className="w-16"
            />
          </Link>
          <div className="flex flex-col gap-0.5">
            <Link href={"/"}>
              <h1 className="text-2xl md:text-3xl font-semibold text-primary">
                Gustavo Monteiro
              </h1>
            </Link>
            <SocialLinks />
          </div>
        </div>
        <HR className="border-primary w-full my-0" />
      </header>
      <PostStyleContext
        post={post}
        renderers={{
          POETRY: PoetryPostStrategy,
          TEXT: TextPostStrategy,
        }}
      />
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const slug = query.slug;
  if (typeof slug !== "string") {
    return {
      notFound: true,
      props: {},
    };
  }
  const response = await fetch(`${process.env.API_URL}/posts/${slug}`);
  if (response.status === 404) {
    return {
      notFound: 404,
      props: {},
    };
  }
  const post: Post = await response.json();

  return {
    props: { post },
  };
};
