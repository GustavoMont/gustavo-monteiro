export type PostType = "POETRY" | "TEXT";

export type Post = {
  type: PostType;
  title: string;
  tags: string[];
  publishedDate: string;
  updatedDate: string;
  slug: string;
  content: string;
};
