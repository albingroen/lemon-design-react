import React, {
  DetailedHTMLProps,
  HTMLAttributes,
  ReactNode,
  forwardRef,
} from "react";
import SidebarItemGroup from "./SidebarItemGroup";
import { SidebarItemLink, SidebarItemButton } from "./SidebarItem";
import classNames from "../lib/classNames";

export interface CustomSidebarProps {
  header?: ReactNode;
  footer?: ReactNode;
}

export interface SidebarProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>,
    CustomSidebarProps {}

function Sidebar({
  header,
  children,
  footer,
  className,
  ...rest
}: SidebarProps) {
  return (
    <aside
      {...rest}
      className={classNames(
        "h-full bg-white w-full border-r max-w-[280px] p-5 overflow-y-auto flex flex-col space-y-5",
        className
      )}
    >
      {header}

      <div className="divide-y sidebar-groups flex-1">{children}</div>

      {footer}
    </aside>
  );
}

Sidebar.Group = SidebarItemGroup;
Sidebar.ItemLink = forwardRef(SidebarItemLink);
Sidebar.ItemButton = SidebarItemButton;

export default Sidebar;
