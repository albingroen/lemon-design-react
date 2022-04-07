import React from "react";
import classNames from "../lib/classNames";
import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface SidebarItemGroupCustomProps {
  heading?: string;
}

export interface SidebarItemGroupProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLUListElement>, HTMLUListElement>,
    SidebarItemGroupCustomProps {}

export default function SidebarItemGroup({
  children,
  heading,
  className,
  ...rest
}: SidebarItemGroupProps) {
  return (
    <ul {...rest} className={classNames("w-full flex flex-col", className)}>
      {heading && (
        <li className="text-sm text-gray-400 !my-1.5">
          <h4>{heading}</h4>
        </li>
      )}

      {children}
    </ul>
  );
}
