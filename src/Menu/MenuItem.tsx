import React, { DetailedHTMLProps, HTMLAttributes } from "react";
import classNames from "../lib/classNames";

export interface CustomMenuItemProps {
  active?: boolean;
}

export interface MenuItemProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
    CustomMenuItemProps {}

export function getMenuItemStyles(active: boolean = false) {
  const menuItemStyles = {
    base: "border-l-4 px-3 py-2.5 hover:bg-gray-50 transition",
    active: "border-l-indigo-500 font-medium",
    inactive: "border-l-transparent",
  };

  return classNames(
    menuItemStyles.base,
    active ? menuItemStyles.active : menuItemStyles.inactive
  );
}

export default function MenuItem({
  className,
  children,
  active,
  ...rest
}: MenuItemProps) {
  return (
    <div {...rest} className={classNames(getMenuItemStyles(active), className)}>
      <span>{children}</span>
    </div>
  );
}
