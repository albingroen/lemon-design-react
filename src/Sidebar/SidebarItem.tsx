import React, {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  DetailedHTMLProps,
  ReactNode,
  Ref,
} from "react";
import classNames from "../lib/classNames";

export interface SidebarItemCustomProps {
  activeIcon?: ReactNode;
  icon?: ReactNode;
  active?: boolean;
}

export function getSidebarItemStyles({ active }: SidebarItemCustomProps) {
  const sidebarItemStyles = {
    base: "px-2.5 py-2 hover:bg-gray-100 transition -mx-2.5 rounded-md flex items-center space-x-2.5 text-left group",
    active: "font-medium bg-gray-50",
  };

  return classNames(sidebarItemStyles.base, active && sidebarItemStyles.active);
}

export interface SidebarItemLinkProps
  extends DetailedHTMLProps<
      AnchorHTMLAttributes<HTMLAnchorElement>,
      HTMLAnchorElement
    >,
    SidebarItemCustomProps {}

export function SidebarItemLink(
  {
    activeIcon,
    className,
    children,
    active,
    icon,
    ...rest
  }: SidebarItemLinkProps,
  ref: Ref<HTMLAnchorElement>
) {
  return (
    <a
      {...rest}
      ref={ref}
      className={classNames(getSidebarItemStyles({ active, icon }), className)}
    >
      {active ? activeIcon || icon : icon}
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
  activeIcon,
  className,
  children,
  active,
  icon,
  ...rest
}: SidebarItemButtonProps) {
  return (
    <button
      {...rest}
      className={classNames(getSidebarItemStyles({ active, icon }), className)}
    >
      {active ? activeIcon || icon : icon}
      <span>{children}</span>
    </button>
  );
}
