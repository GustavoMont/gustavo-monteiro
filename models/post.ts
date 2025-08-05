import { Post, PostTypeEnum } from "@/@types/post";
import { readdir, readFile } from "node:fs/promises";
import { resolve } from "node:path";
import grayMatter from "gray-matter";

type ListParams = Partial<{
  exclude: string;
}>;

const POST_PATH = "_posts";

async function listPosts({ exclude }: ListParams = {}): Promise<Post[]> {
  const allFiles = await readdir(resolve(POST_PATH));
  const posts: Post[] = [];

  for (const fileName of allFiles) {
    const slug = fileName.replace(".md", "");

    if (slug === exclude) continue;

    const post: Post = await findBySlug(slug);
    posts.push(post);
  }

  return posts;
}

async function findBySlug(slug: string): Promise<Post> {
  const fileName = `${slug}.md`;
  const fileContent = await readFile(resolve(POST_PATH, fileName), "utf-8");
  const { content, data } = grayMatter(fileContent);
  const writtenAt = data.writtenAt.toISOString();
  const type: PostTypeEnum = data.type;

  return {
    banner: data.banner,
    content,
    description: data.description,
    slug,
    title: data.title,
    type,
    writtenAt,
  };
}

const post = { listPosts, findBySlug };

export default post;
