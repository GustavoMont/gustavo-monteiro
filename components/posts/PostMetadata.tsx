import { Post, PostTypeEnum } from "@/@types/post";

type Props = Pick<Post, "writtenAt" | "type">;

export function PostMetadata({ type, writtenAt }: Props) {
  const a = new Intl.DateTimeFormat("pt-br", {
    month: "2-digit",
    day: "2-digit",
    year: "numeric",
  }).format(new Date(writtenAt));
  return (
    <div className="flex items-center mt-2 gap-2 justify-end">
      <PostTypeBadge type={type} />
      <p>{a}</p>
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
