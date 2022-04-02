import React, { DetailedHTMLProps, HTMLAttributes } from "react";
import classNames from "../lib/classNames";

export interface CustomLabelProps {
  required?: boolean;
}

export interface LabelProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLLabelElement>, HTMLLabelElement>,
    CustomLabelProps {}

export function getLabelStyles() {
  const LabelStyles = {
    base: "text-gray-500 text-sm",
  };

  return classNames(LabelStyles.base);
}

export default function Label({
  className,
  children,
  required,
  ...rest
}: LabelProps) {
  return (
    <label {...rest} className={classNames(getLabelStyles(), className)}>
      {children}
      {required && "*"}
    </label>
  );
}
