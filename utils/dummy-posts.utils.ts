import { Post, PostTypeEnum } from "@/@types/post";

export const dummyPosts: Post[] = Array.from({ length: 6 }).map((_, i) => ({
  slug: `post-${i}`,
  description: `Lorem ipsum dolor sit amet consectetur. Aliquam faucibus tempor cursus id. ${i}`,
  title: `Post ${i}`,
  type: i % 2 === 0 ? PostTypeEnum.POETRY : PostTypeEnum.TEXT,
  writtenAt: new Date().toISOString(),
  banner: "https://picsum.photos/600",
  content:
    "Lorem ipsum dolor sit amet consectetur. Tortor enim mi eget sed a arcu non vestibulum. Fames massa convallis scelerisque et nulla quis. Et tellus condimentum quis tincidunt. Consequat accumsan molestie ac phasellus amet ipsum porta aliquam.\n\n## Subtitle\n\nUllamcorper ac ipsum etiam senectus vulputate id. Gravida proin tellus tempus a eu pulvinar ultrices. Dignissim non euismod congue tellus viverra convallis ut. Dolor est donec suspendisse viverra orci quam. Lobortis egestas feugiat euismod turpis sagittis nec tempus tristique tellus. Neque non quisque arcu at nibh lorem cras semper nulla. Velit lorem dolor tempor viverra ut quis id at. Sit purus nulla enim eget ipsum integer et in. Ultrices enim eget lorem ac dictumst dignissim orci ut vestibulum.",
}));
