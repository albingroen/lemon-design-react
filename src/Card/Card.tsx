import React, { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";
import classNames from "../lib/classNames";
import Typography from "../Typography";
import CardContent from "./CardContent";

export interface CustomCardProps {
  heading?: ReactNode;
  extra?: ReactNode;
}

export interface CardProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
    CustomCardProps {}

export function getCardStyles() {
  const cardStyles = {
    base: "bg-white overflow-hidden shadow rounded-lg divide-y divide-y-100",
  };

  return classNames(cardStyles.base);
}

function Card({ children, className, heading, extra, ...rest }: CardProps) {
  return (
    <div {...rest} className={classNames(getCardStyles(), className)}>
      {(heading || extra) && (
        <CardContent className="flex !p-3.5 !pl-5 items-center justify-between">
          {typeof heading === "string" ? (
            <Typography.Heading level={4}>{heading}</Typography.Heading>
          ) : (
            heading
          )}

          {extra}
        </CardContent>
      )}
      {children}
    </div>
  );
}

Card.Content = CardContent;

export default Card;
