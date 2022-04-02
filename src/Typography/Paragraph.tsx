import React, { DetailedHTMLProps, HTMLAttributes } from "react";
import classNames from "../lib/classNames";

export interface CustomParagraphProps {
  dim?: boolean;
}

export interface ParagraphProps
  extends DetailedHTMLProps<
      HTMLAttributes<HTMLParagraphElement>,
      HTMLParagraphElement
    >,
    CustomParagraphProps {}

export function getParagraphStyles({ dim }: CustomParagraphProps) {
  const paragraphStyles = {
    dim: "text-gray-500",
  };

  return classNames(dim && paragraphStyles.dim);
}

export default function Paragraph({
  className,
  children,
  dim,
  ...rest
}: ParagraphProps) {
  return (
    <p {...rest} className={classNames(getParagraphStyles({ dim }), className)}>
      {children}
    </p>
  );
}
