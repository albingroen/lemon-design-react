import React, { DetailedHTMLProps, HTMLAttributes } from "react";
import classNames from "../lib/classNames";

export interface CustomCardContentProps {}

export interface CardContentProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
    CustomCardContentProps {}

export function getCardContentStyles() {
  const cardStyles = {
    base: "p-5",
  };

  return classNames(cardStyles.base);
}

export default function CardContent({
  className,
  children,
  ...rest
}: CardContentProps) {
  return (
    <div {...rest} className={classNames(getCardContentStyles(), className)}>
      {children}
    </div>
  );
}
