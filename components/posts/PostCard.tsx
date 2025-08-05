import { Post, PostTypeEnum } from "@/@types/post";

type Props = {
  post: Post;
};

export function PostCard({ post }: Props) {
  const a = new Intl.DateTimeFormat("pt-br", {
    month: "2-digit",
    day: "2-digit",
    year: "numeric",
  }).format(new Date(post.writtenAt));

  return (
    <div className="flex flex-col gap-3 lg:flex-row-reverse">
      <img
        src={post.banner}
        alt={`Banner do Post ${post.title}`}
        className="aspect-square w-1/2 max-w-36 object-cover rounded-lg"
      />
      <div className="flex flex-col">
        <h3 className="text-primary text-lg">{post.title}</h3>
        <p className="lg:flex-1">{post.description}</p>
        <div className="flex items-center mt-2 gap-2 justify-end">
          <PostTypeBadge type={post.type} />
          <p>{a}</p>
        </div>
      </div>
    </div>
  );
}

type BadgeProps = {
  type: PostTypeEnum;
};
function PostTypeBadge({ type }: BadgeProps) {
  const typeTexts: Record<PostTypeEnum, string> = {
    POETRY: "Poema",
    TEXT: "Texto",
  };
  const typeColors: Record<PostTypeEnum, string> = {
    POETRY: "bg-primary",
    TEXT: "bg-secondary",
  };

  return (
    <p className={`${typeColors[type]} text-sm px-2 py-0.5 rounded-full m-0`}>
      {typeTexts[type]}
    </p>
  );
}
