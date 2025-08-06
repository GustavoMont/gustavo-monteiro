import fileReader from "@/models/file-reader";
import post from "@/models/post";
import { faker } from "@faker-js/faker";
import { PostTypeEnum } from "@/@types/post";
import { resolve } from "node:path";
import { NotFoundError } from "@/infra/erros";

describe('"Post" Model', () => {
  beforeEach(() => {
    jest.restoreAllMocks();
  });
  describe("listPosts", () => {
    test("with not existing directory", async () => {
      jest.spyOn(fileReader, "checkDir").mockReturnValue(false);
      const posts = await post.listPosts();
      expect(posts).toStrictEqual([]);
    });
    test("with empty directory", async () => {
      jest.spyOn(fileReader, "listDirFiles").mockResolvedValue([]);
      const posts = await post.listPosts();
      expect(posts).toStrictEqual([]);
    });
    test("with populated directory", async () => {
      const files = ["file-1.md", "file-2.md", "file-3.md"];
      jest.spyOn(fileReader, "listDirFiles").mockResolvedValue(files);
      jest.spyOn(fileReader, "readFile")
        .mockResolvedValue(`---\ntitle: ${faker.book.title()}\ndescription: ${faker.lorem.paragraph()}\nwrittenAt: 2020-12-20\ntype: ${PostTypeEnum.POETRY}\nbanner: ${faker.image.avatar()}\n---

      ## Top
      ${faker.lorem.sentences()}

    `);
      const posts = await post.listPosts();
      expect(posts).toHaveLength(files.length);
      for (const file of files) {
        expect(fileReader.readFile).toHaveBeenCalledWith(
          resolve(post.POST_PATH, file),
        );
      }

      for (let index = 0; index < posts.length; index++) {
        expect(posts[index].slug).toBe(files[index].replace(".md", ""));
      }
    });
  });
  describe("findBySlug", () => {
    test("with no existing file", async () => {
      expect(
        async () => await post.findBySlug("file-not-exists"),
      ).rejects.toThrow(NotFoundError);
    });
    test("with existing file", async () => {
      const title = faker.book.title();
      const description = faker.lorem.paragraph();
      const writtenAt = "2020-12-20";
      const type = PostTypeEnum.POETRY;
      const banner = faker.image.avatar();
      const content = `## Top
      ${faker.lorem.sentences()}`;

      jest
        .spyOn(fileReader, "readFile")
        .mockResolvedValue(
          `---\ntitle: ${title}\ndescription: ${description}\nwrittenAt: ${writtenAt}\ntype: ${type}\nbanner: ${banner}\n---\n${content}`,
        );
      const slug = "existing-file";
      const foundPost = await post.findBySlug(slug);
      expect(foundPost).toStrictEqual({
        title,
        slug,
        description,
        writtenAt: new Date(writtenAt).toISOString(),
        type,
        content,
        banner,
      });
    });
  });
});
