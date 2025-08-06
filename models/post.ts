import { Post, PostTypeEnum } from "@/@types/post";
import { resolve } from "node:path";
import grayMatter from "gray-matter";
import fileReader from "./file-reader";
import { NotFoundError } from "@/infra/erros";

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

    const post = await findBySlug(slug);
    posts.push(post);
  }

  return posts;
}

async function findBySlug(slug: string): Promise<Post> {
  const fileName = `${slug}.md`;
  let fileContent: string;
  try {
    fileContent = await fileReader.readFile(resolve(POST_PATH, fileName));
  } catch (error) {
    throw new NotFoundError({ cause: error, message: "Post não encontrado." });
  }
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

const post = { listPosts, findBySlug, POST_PATH };

export default post;
