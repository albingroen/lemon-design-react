import React, { ReactNode } from "react";
import * as TooltipPrimitive from "@radix-ui/react-tooltip";

const TooltipWrapper = TooltipPrimitive.Root;
const TooltipTrigger = TooltipPrimitive.Trigger;
const TooltipContent = TooltipPrimitive.Content;

export interface TooltipProps {
  children: ReactNode;
  title: string;
}

export default function Tooltip({ children, title }: TooltipProps) {
  return (
    <TooltipWrapper>
      <TooltipTrigger asChild>{children}</TooltipTrigger>
      <TooltipContent
        className="bg-black py-1.5 px-2 rounded-md text-sm text-white"
        sideOffset={5}
      >
        {title}
      </TooltipContent>
    </TooltipWrapper>
  );
}
