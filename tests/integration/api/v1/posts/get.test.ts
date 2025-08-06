import fileReader from "@/models/file-reader";
import post from "@/models/post";
import orchestrator from "@/tests/orchestrator";
import { resolve } from "path";

beforeAll(async () => {
  await orchestrator.waitForAllServices();
});

describe("GET /api/v1/posts", () => {
  test("listing posts", async () => {
    const response = await fetch("http://localhost:3000/api/v1/posts");
    expect(response.status).toBe(200);
    const posts = await response.json();
    const files = await fileReader.listDirFiles(resolve(post.POST_PATH));
    expect(posts).toHaveLength(files.length);
  });
});
