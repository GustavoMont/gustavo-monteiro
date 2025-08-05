import { Post, PostTypeEnum } from "@/@types/post";
import { resolve } from "node:path";
import grayMatter from "gray-matter";
import fileReader from "./file-reader";

type ListParams = Partial<{
  exclude: string;
}>;

const POST_PATH = "_posts";

async function listPosts({ exclude }: ListParams = {}): Promise<Post[]> {
  const allFiles = await fileReader.listDirFiles(resolve(POST_PATH));

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
  const fileContent = await fileReader.readFile(resolve(POST_PATH, fileName));
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
