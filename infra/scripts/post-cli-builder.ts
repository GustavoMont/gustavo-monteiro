import readline from "node:readline/promises";
import { Post, PostTypeEnum } from "@/@types/post";

export function createPostCliBuilder(post: Partial<Post> = {}) {
  const postInputValues: Post = {
    banner: post.banner || "",
    title: post.title || "",
    content: post.content || "",
    writtenAt: post.writtenAt || "",
    type: post.type || PostTypeEnum.TEXT,
    description: post.description || "",
    slug: post.slug || "",
  };

  const input = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  return {
    build,
    readStringFields,
    readType,
  };

  function build(): Post {
    input.close();
    return postInputValues;
  }

  async function readStringFields(
    field: keyof Omit<Post, "slug" | "writtenAt" | "type">,
  ) {
    const fieldValue = await input.question(`Type the ${field}: `);
    postInputValues[field] = fieldValue;
  }

  async function readType() {
    const typeValues = Object.values(PostTypeEnum);
    const typesOptions = typeValues.reduce((acc, value, index) => {
      const newValue = acc.concat(`${index} - ${value}\n`);
      return newValue;
    }, "");
    console.log(`Choose a post type: \n${typesOptions}`);
    const chooseOption = await input.question(
      `(The default option is ${PostTypeEnum.TEXT}): `,
    );
    const numberOption = Number(chooseOption);
    const type = typeValues.at(numberOption) || PostTypeEnum.TEXT;
    postInputValues.type = type;
  }
}
