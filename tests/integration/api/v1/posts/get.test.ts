import fileReader from "@/models/file-reader";
import post from "@/models/post";
import { resolve } from "path";

describe("GET /api/v1/posts", () => {
  test("listing posts", async () => {
    const response = await fetch("http://localhost:3000/api/v1/posts");
    expect(response.status).toBe(200);
    const posts = await response.json();
    const files = await fileReader.listDirFiles(resolve(post.POST_PATH));
    expect(posts).toHaveLength(files.length);
  });
});
