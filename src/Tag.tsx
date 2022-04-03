import React, { DetailedHTMLProps, HTMLAttributes } from "react";
import classNames from "./lib/classNames";

export interface CustomTagProps {
  variant?: "default" | "primary" | "danger" | "warning" | "success";
}

export interface TagProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>,
    CustomTagProps {}

export function getTagStyles({ variant = "default" }: CustomTagProps) {
  const tagStyles = {
    base: "inline-flex items-center px-2 py-1 rounded text-sm border",
    variant: {
      default: "bg-gray-100 text-gray-800 border-gray-200",
      primary: "bg-indigo-100 text-indigo-800 border-indigo-200",
      warning: "bg-yellow-100 text-yellow-800 border-yellow-300",
      success: "bg-green-100 text-green-800 border-green-200",
      danger: "bg-red-100 text-red-800 border-red-200",
    },
  };

  return classNames(tagStyles.base, tagStyles.variant[variant]);
}

export default function Tag({
  className,
  children,
  variant,
  ...rest
}: TagProps) {
  return (
    <span
      {...rest}
      className={classNames(getTagStyles({ variant }), className)}
    >
      {children}
    </span>
  );
}
