import { Post } from "@/@types/post.type";
import { readFile, readdir } from "node:fs/promises";
import { resolve } from "node:path";
import matter from "gray-matter";

async function getPostByFilename(filename: string): Promise<Post> {
  const path = resolve("_posts");
  const slug = filename.replace(".md", "");
  const postFile = await readFile(resolve(path, filename), "utf-8");

  const { content, data } = matter(postFile);
  return {
    slug,
    content,
    title: data.title,
    publishedDate: data["published-date"],
    updatedDate: data["updated-date"],
    tags: data.tags,
    type: data.type,
  };
}

export async function getPostBySlug(slug: string): Promise<Post> {
  return getPostByFilename(slug + ".md");
}

export async function getPosts() {
  const path = resolve("_posts");
  const files = await readdir(path, "utf-8");
  const postPromises = files.map<Promise<Post>>(getPostByFilename);
  return Promise.all(postPromises);
}
