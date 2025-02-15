import { Post } from "@/@types/post.type";
import { Avatar } from "@/components/Avatar";
import { PostItem } from "@/components/post/PostItem";
import { SocialLinks } from "@/components/SocialLinks";
import { GetServerSideProps } from "next";
import React from "react";

type Props = {
  posts: Post[];
};

export default function Home({ posts }: Props) {
  return (
    <>
      <header className="flex flex-col gap-4">
        <Avatar src="/assets/perfil-gustavo-monteiro.jpg" className="w-20" />
        <div className="flex flex-col gap-2">
          <h1 className="text-2xl md:text-4xl font-semibold text-primary">
            Gustavo Monteiro
          </h1>

          <p className="max-w-xl">
            Observo tudo a minha volta, tentando transformar pesadelo em uma boa
            história, observo o que me cerca, peço a Deus pra ser um poeta
          </p>
          <SocialLinks />
        </div>
      </header>
      <main className="flex flex-col gap-4 py-5">
        <h2 className="text-xl text-primary font-semibold">
          O que ando escrevendo:
        </h2>
        <ul className="flex flex-col gap-10 md:max-w-[60%]">
          {posts.map((post) => (
            <li key={post.slug}>
              <PostItem post={post} />
            </li>
          ))}
        </ul>
      </main>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const response = await fetch(`${process.env.API_URL}/posts`);
  const posts: Post[] = await response.json();

  return {
    props: { posts },
  };
};
