import MenuItem from "./MenuItem";
import React from "react";
import classNames from "../lib/classNames";
import { Card, CardProps } from "../Card";

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

Menu.Item = MenuItem;

export default Menu;
