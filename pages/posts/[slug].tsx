import { Post } from "@/@types/post.type";
import { H1 } from "@/components/post/poetry/H1";
import { HR } from "@/components/post/poetry/HR";
import { Paragraph } from "@/components/post/poetry/Paragraph";
import { GetServerSideProps } from "next";
import React from "react";
import ReactMarkdown from "react-markdown";

type Props = {
  post: Post;
};

export default function PostPage({ post }: Props) {
  if (post.type === "POETRY") {
    return (
      <main className="pb-4">
        <ReactMarkdown
          components={{
            h1: H1,
            p: Paragraph,
            hr: HR,
          }}
        >
          {post.content}
        </ReactMarkdown>
      </main>
    );
  }
  return (
    <main
      className="prose prose-headings:text-primary prose-code:text-accent prose-code:bg-accent-content
    prose-blockquote:bg-primary-content prose-blockquote:border-primary prose-blockquote:rounded-md"
    >
      <ReactMarkdown>{post.content}</ReactMarkdown>
    </main>
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
