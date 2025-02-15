import React from "react";
import { PostStrategy } from "./PostStyleContext";
import ReactMarkdown from "react-markdown";
import { H1 } from "../poetry/H1";
import { Paragraph } from "../poetry/Paragraph";
import { HR } from "../poetry/HR";

export const TextPostStrategy: PostStrategy = ({ post }) => {
  return (
    <main
      className="prose prose-headings:text-primary prose-code:text-accent prose-code:bg-accent-content
      prose-blockquote:bg-primary-content prose-blockquote:border-primary prose-blockquote:rounded-md"
    >
      <ReactMarkdown>{post.content}</ReactMarkdown>
    </main>
  );
};

export const PoetryPostStrategy: PostStrategy = ({ post }) => {
  return (
    <main className="pb-5">
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
};
