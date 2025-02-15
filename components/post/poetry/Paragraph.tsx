import { DetailedHTMLProps, HTMLAttributes } from "react";

type Props = DetailedHTMLProps<
  HTMLAttributes<HTMLParagraphElement>,
  HTMLHeadingElement
>;

export const Paragraph = (props: Props) => {
  return <p {...props} className="font-normal mb-1" />;
};
