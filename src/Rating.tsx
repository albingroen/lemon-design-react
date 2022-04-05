import React, { useState } from "react";
import Stack, { StackProps } from "./Stack";
import classNames from "./lib/classNames";
import { StarIcon } from "@heroicons/react/solid";

export interface CustomRatingProps {
  onChangeValue?: (value: number) => void;
  size?: "small" | "default" | "large";
  amountOfStars?: number;
  value?: number;
}

export interface RatingProps extends StackProps, CustomRatingProps {}

export default function Rating({
  amountOfStars = 5,
  size = "default",
  onChangeValue,
  value = 0,
  className,
  ...rest
}: RatingProps) {
  const [hovering, setHovering] = useState<number>();

  const numbers = Array.from(Array(amountOfStars).keys());

  return (
    <Stack
      align="center"
      spacing="mini"
      onMouseLeave={() => {
        setHovering(undefined);
      }}
      {...rest}
      className={classNames("!gap-0", className)}
    >
      {numbers.map((n) => {
        const highlighted =
          typeof hovering === "number" ? n < hovering + 1 : n < value;

        const isFirst = !n;
        const isLast = n === numbers.length - 1;

        return (
          <button
            key={n}
            disabled={!onChangeValue}
            className={classNames(
              "transition",
              isFirst ? "pr-0.5" : isLast ? "pl-0.5" : "px-0.5",
              highlighted ? "text-yellow-500 drop-shadow-sm" : "text-gray-300",
              highlighted &&
                onChangeValue &&
                "hover:transform hover:scale-125 active:text-yellow-600 active:scale-100 transition"
            )}
            onClick={() => {
              if (onChangeValue) {
                onChangeValue(n + 1);
              }
            }}
            onMouseEnter={() => {
              setHovering(n);
            }}
          >
            <StarIcon
              className={
                {
                  default: "w-6",
                  large: "w-8",
                  small: "w-5",
                }[size]
              }
            />
          </button>
        );
      })}
    </Stack>
  );
}
