export type Post = {
  title: string;
  description: string;
  writtenAt: string;
  type: PostTypeEnum;
  slug: string;
  banner: string;
};

export enum PostTypeEnum {
  TEXT = "TEXT",
  POETRY = "POETRY",
}
