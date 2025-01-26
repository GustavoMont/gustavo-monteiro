import { Post } from "@/@types/post.type";
import { InstagramIcon } from "@/assets/icons";
import { Avatar } from "@/components/Avatar";
import { PostItem } from "@/components/post/PostItem";
import { GetServerSideProps } from "next";
import Link from "next/link";
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
          <Link
            href={"https://www.instagram.com/gustavomont_136/"}
            target="_blank"
          >
            <InstagramIcon className="w-6 h-6 fill-accent" />
          </Link>
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
