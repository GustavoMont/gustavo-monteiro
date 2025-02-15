import { DetailedHTMLProps, HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

type Props = DetailedHTMLProps<HTMLAttributes<HTMLHRElement>, HTMLHRElement>;

export const HR = (props: Props) => {
  return (
    <hr
      {...props}
      className={twMerge(
        "my-5 w-2/5 opacity-50 border-secondary",
        props.className,
      )}
    />
  );
};
