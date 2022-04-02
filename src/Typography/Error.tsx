import React, { DetailedHTMLProps, HTMLAttributes } from "react";
import classNames from "../lib/classNames";

export interface CustomErrorProps {}

export interface ErrorProps
  extends DetailedHTMLProps<
      HTMLAttributes<HTMLParagraphElement>,
      HTMLParagraphElement
    >,
    CustomErrorProps {}

export function getErrorStyles() {
  const errorStyles = {
    base: "text-red-600",
  };

  return classNames(errorStyles.base);
}

export default function Error({ className, children, ...rest }: ErrorProps) {
  return (
    <p {...rest} className={classNames(getErrorStyles(), className)}>
      {children}
    </p>
  );
}
