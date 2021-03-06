import React, { DetailedHTMLProps, HTMLAttributes } from "react";
import classNames from "./lib/classNames";

export interface CustomStackProps {
  spacing?: "none" | "px" | "mini" | "small" | "default" | "large" | "huge";
  align?: "stretch" | "center" | "start" | "end" | "baseline";
  direction?: "vertical" | "horizontal";
  wrap?: boolean;
  justify?:
    | "between"
    | "stretch"
    | "around"
    | "center"
    | "evenly"
    | "start"
    | "end";
}

export interface StackProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
    CustomStackProps {}

export function getStackStyles({
  direction = "horizontal",
  justify = "stretch",
  spacing = "default",
  align = "stretch",
  wrap = false,
}: CustomStackProps) {
  const stackStyles = {
    base: "flex",
    wrap: "flex-wrap",
    spacing: {
      default: "gap-3",
      huge: "gap-5",
      large: "gap-4",
      mini: "gap-1",
      small: "gap-2",
      none: "gap-0",
      px: "gap-px",
    },
    justify: {
      between: "justify-between",
      stretch: "justify-stretch",
      around: "justify-around",
      evenly: "justify-evenly",
      center: "justify-center",
      start: "justify-start",
      end: "justify-end",
    },
    align: {
      baseline: "items-baseline",
      stretch: "items-stretch",
      center: "items-center",
      start: "items-start",
      end: "items-end",
    },
    direction: {
      horizontal: "flex-row",
      vertical: "flex-col",
    },
  };

  return classNames(
    stackStyles.base,
    stackStyles.direction[direction],
    stackStyles.spacing[spacing],
    stackStyles.justify[justify],
    stackStyles.align[align],
    wrap && stackStyles.wrap
  );
}

export default function Stack({
  direction = "horizontal",
  justify = "stretch",
  align = "stretch",
  children,
  spacing,
  wrap,
  ...rest
}: StackProps) {
  return (
    <div
      {...rest}
      className={classNames(
        getStackStyles({ direction, spacing, align, justify, wrap }),
        rest.className
      )}
    >
      {children}
    </div>
  );
}
