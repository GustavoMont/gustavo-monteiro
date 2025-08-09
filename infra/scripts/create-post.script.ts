import { Post } from "@/@types/post";
import post from "@/models/post";
import { createPostCliBuilder } from "./post-cli-builder";

(async () => {
  const postBuilder = createPostCliBuilder();
  const fields: (keyof Pick<Post, "banner" | "title" | "description">)[] = [
    "title",
    "description",
    "banner",
  ];

  for (const field of fields) {
    await postBuilder.readStringFields(field);
  }
  await postBuilder.readType();

  await post.createPost(postBuilder.build());
})();
