import React, { DetailedHTMLProps, HTMLAttributes } from "react";
import classNames from "../lib/classNames";

type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6;

export interface CustomHeadingProps {
  level?: HeadingLevel;
}

export interface HeadingProps
  extends DetailedHTMLProps<
      HTMLAttributes<HTMLHeadingElement>,
      HTMLHeadingElement
    >,
    CustomHeadingProps {}

function getElement(level: HeadingLevel = 1) {
  switch (level) {
    case 1:
      return "h1";
    case 2:
      return "h2";
    case 3:
      return "h3";
    case 4:
      return "h4";
    case 5:
      return "h5";
    case 6:
      return "h6";
    default:
      return "h1";
  }
}

export function getHeadingStyles({ level = 1 }: CustomHeadingProps) {
  const headingStyles = {
    base: "font-medium",
    level: [
      "text-3xl",
      "text-2xl",
      "text-xl",
      "text-lg",
      "text-base",
      "text-sm",
    ],
  };

  return classNames(headingStyles.base, headingStyles.level[level - 1]);
}

export default function Heading({
  className,
  children,
  level,
  ...rest
}: HeadingProps) {
  const Element = getElement(level);

  return (
    <Element
      {...rest}
      className={classNames(getHeadingStyles({ level }), className)}
    >
      {children}
    </Element>
  );
}
