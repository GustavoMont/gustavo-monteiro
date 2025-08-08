import { PostTypeEnum } from "@/@types/post";

const typeTexts: Record<PostTypeEnum, string> = {
  POETRY: "Poema",
  TEXT: "Texto",
};

export function getTypeText(type: PostTypeEnum) {
  return typeTexts[type];
}
