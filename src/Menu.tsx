import React, { DetailedHTMLProps, HTMLAttributes } from "react";
import classNames from "./lib/classNames";
import { Card, CardProps } from "./Card";

// Menu

export interface CustomMenuProps {}

export interface MenuProps extends CardProps, CustomMenuProps {}

export function getMenuStyles() {
  const menuStyles = {
    base: "overflow-hidden divide-y",
  };

  return classNames(menuStyles.base);
}

function Menu({ className, children, ...rest }: MenuProps) {
  return (
    <Card {...rest} className={classNames(getMenuStyles(), className)}>
      {children}
    </Card>
  );
}

// Menu Item
export interface CustomMenuItemProps {
  active?: boolean;
}

export interface MenuItemProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
    CustomMenuItemProps {}

export function getMenuItemStyles(active: boolean = false) {
  const menuItemStyles = {
    base: "border-l-4 px-3 py-2.5 hover:bg-gray-50 transition",
    inactive: "border-l-transparent",
    active: "border-l-indigo-500",
  };

  return classNames(
    menuItemStyles.base,
    active ? menuItemStyles.active : menuItemStyles.inactive
  );
}

export function MenuItem({
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

Menu.Item = MenuItem;

export default Menu;
