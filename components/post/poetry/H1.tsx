import React, { DetailedHTMLProps, HTMLAttributes } from "react";

type Props = DetailedHTMLProps<
  HTMLAttributes<HTMLHeadingElement>,
  HTMLHeadingElement
>;

export function H1(props: Props) {
  return (
    <h1 {...props} className="text-primary text-4xl font-medium mb-5 p-0" />
  );
}
