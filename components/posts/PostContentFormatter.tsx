import Markdown from "react-markdown";

type Props = {
  content: string;
};

export function PostContenFormatter({ content }: Props) {
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
      }}
    >
      {content}
    </Markdown>
  );
}
