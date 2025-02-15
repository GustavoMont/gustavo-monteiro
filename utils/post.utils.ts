import { PostType } from "@/@types/post.type";

export function getPostTypeName(postType: PostType) {
  const typeTexts: Record<PostType, string> = {
    POETRY: "Poema",
    TEXT: "Texto",
  };
  return typeTexts[postType];
}
