import { PostTypeEnum } from "@/@types/post";
import Markdown from "react-markdown";

type Props = {
  content: string;
  type: PostTypeEnum;
};

export function PostContentFormatter({ content, type }: Props) {
  const isPoetry = type === PostTypeEnum.POETRY;

  return (
    <Markdown
      components={{
        h2: (props) => (
          <h2 {...props} className="text-secondary text-lg my-2 font-medium" />
        ),
        a: (props) => (
          <a
            {...props}
            className="text-primary hover:text-secondary ease-in-out duration-150 transition-all underline"
          />
        ),
        blockquote: (props) => (
          <blockquote
            {...props}
            className="bg-primary/30 p-2.5 rounded-md border-l-4 border-primary"
          />
        ),
        p: (props) => (
          <p
            {...props}
            className={
              isPoetry
                ? "mb-4 leading-relaxed whitespace-pre-wrap last:mb-0"
                : "mb-4"
            }
          />
        ),
      }}
    >
      {content}
    </Markdown>
  );
}
