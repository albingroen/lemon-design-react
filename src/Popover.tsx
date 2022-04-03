import React, { ReactNode } from "react";
import * as PopoverPrimitive from "@radix-ui/react-popover";
import classNames from "./lib/classNames";

const PopoverWrapper = PopoverPrimitive.Root;
const PopoverTrigger = PopoverPrimitive.Trigger;
const PopoverContent = PopoverPrimitive.Content;

export interface PopoverProps {
  align?: "start" | "center" | "end";
  children: ReactNode;
  content: ReactNode;
  className?: string;
}

export function getPopoverStyles() {
  const popoverStyles = {
    base: "bg-white p-4 rounded-md shadow-lg border border-gray-100 focus:outline-none",
  };

  return classNames(popoverStyles.base);
}

export default function Popover({
  align = "start",
  className,
  children,
  content,
}: PopoverProps) {
  return (
    <PopoverWrapper>
      <PopoverTrigger asChild>{children}</PopoverTrigger>
      <PopoverContent
        className={classNames(getPopoverStyles(), className)}
        portalled={false}
        sideOffset={5}
        align={align}
      >
        {content}
      </PopoverContent>
    </PopoverWrapper>
  );
}
