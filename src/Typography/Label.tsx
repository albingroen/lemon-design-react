import React, { DetailedHTMLProps, LabelHTMLAttributes } from "react";
import classNames from "../lib/classNames";

export interface CustomLabelProps {
  required?: boolean;
}

export interface LabelProps
  extends DetailedHTMLProps<
      LabelHTMLAttributes<HTMLLabelElement>,
      HTMLLabelElement
    >,
    CustomLabelProps {}

export function getLabelStyles() {
  const LabelStyles = {
    base: "block text-gray-700 text-sm",
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
