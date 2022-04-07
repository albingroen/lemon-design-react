import React, {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  DetailedHTMLProps,
  ReactNode,
  Ref,
} from "react";
import classNames from "../lib/classNames";

export function getSidebarItemStyles() {
  const sidebarItemStyles = {
    base: "px-2.5 py-2 hover:bg-gray-100 transition -mx-2.5 rounded-md flex items-center space-x-2.5 text-left group",
  };

  return classNames(sidebarItemStyles.base);
}

export interface SidebarItemCustomProps {
  icon?: ReactNode;
}

export interface SidebarItemLinkProps
  extends DetailedHTMLProps<
      AnchorHTMLAttributes<HTMLAnchorElement>,
      HTMLAnchorElement
    >,
    SidebarItemCustomProps {}

export function SidebarItemLink(
  { children, icon, className, ...rest }: SidebarItemLinkProps,
  ref: Ref<HTMLAnchorElement>
) {
  return (
    <a
      {...rest}
      ref={ref}
      className={classNames(getSidebarItemStyles(), className)}
    >
      {icon}
      <span>{children}</span>
    </a>
  );
}

export interface SidebarItemButtonProps
  extends DetailedHTMLProps<
      ButtonHTMLAttributes<HTMLButtonElement>,
      HTMLButtonElement
    >,
    SidebarItemCustomProps {}

export function SidebarItemButton({
  children,
  icon,
  className,
  ...rest
}: SidebarItemButtonProps) {
  return (
    <button {...rest} className={classNames(getSidebarItemStyles(), className)}>
      {icon}
      <span>{children}</span>
    </button>
  );
}
