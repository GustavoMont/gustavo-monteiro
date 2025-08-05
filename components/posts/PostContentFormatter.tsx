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
      }}
    >
      {content}
    </Markdown>
  );
}
