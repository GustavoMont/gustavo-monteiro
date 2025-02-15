import { DetailedHTMLProps, HTMLAttributes } from "react";

type Props = DetailedHTMLProps<HTMLAttributes<HTMLHRElement>, HTMLHRElement>;

export const HR = (props: Props) => {
  return <hr {...props} className="my-5 w-2/5 opacity-50 border-secondary" />;
};
