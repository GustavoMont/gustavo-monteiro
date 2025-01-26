export type PostType = "POETRY" | "TEXT";

export type Post = {
  type: PostType;
  description: string;
  title: string;
  tags: string[];
  publishedDate: string;
  updatedDate: string;
  slug: string;
  content: string;
};
