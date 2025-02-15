import { Post } from "@/@types/post.type";
import { CheveronRight } from "@/assets/icons";
import { getPostTypeName } from "@/utils/post.utils";
import Link from "next/link";

type Props = {
  post: Post;
};

export function PostItem({ post }: Props) {
  return (
    <div className="flex flex-col gap-1 max-w-xl">
      <Link className="flex flex-col gap-0.5" href={`/posts/${post.slug}`}>
        <time
          className="text-base-content/45 text-[12px]"
          dateTime={new Date(post.publishedDate).toLocaleDateString("pt-BR")}
        >
          {new Date(post.publishedDate).toLocaleDateString("pt-BR")}
        </time>
        <h3 className="font-semibold text-lg text-secondary">{post.title}</h3>
      </Link>

      <span
        className={`${post.type === "TEXT" ? "bg-accent" : "bg-primary"} text-base-100 font-semibold text-xs w-min px-2 py-1 rounded-tr-md rounded-bl-md rounded-tl-sm rounded-br-sm`}
      >
        {getPostTypeName(post.type)}
      </span>
      <p>{post.description}</p>
      <Link
        className="text-accent hover:text-xl active:text-sm flex items-center gap-1 hover:text-secondary transition-all ease-in-out duration-300 w-min"
        href={`/posts/${post.slug}`}
      >
        <p>Ver</p>
        <CheveronRight className="h-4 w-4" />
      </Link>
    </div>
  );
}
