import React, {
  ButtonHTMLAttributes,
  DetailedHTMLProps,
  HTMLAttributes,
} from "react";
import classNames from "./lib/classNames";

export interface CustomTabsProps {}

export interface TabsProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLUListElement>, HTMLUListElement>,
    CustomTabsProps {}

function Tabs({ children, className, ...rest }: TabsProps) {
  return (
    <ul
      {...rest}
      className={classNames(
        "flex items-center space-x-2 border-b border-indigo-100",
        className
      )}
    >
      {children}
    </ul>
  );
}

export interface CustomTabProps {
  active?: boolean;
}

export interface TabProps
  extends DetailedHTMLProps<
      ButtonHTMLAttributes<HTMLButtonElement>,
      HTMLButtonElement
    >,
    CustomTabProps {}

export function Tab({ children, active, className, ...rest }: TabProps) {
  return (
    <li>
      <button
        {...rest}
        className={classNames(
          "py-2.5 px-4 rounded-t-md border-b-2 transition disabled:opacity-50 disabled:pointer-events-none",
          active
            ? "border-indigo-500 text-indigo-500 font-medium"
            : "border-transparent hover:text-indigo-500 hover:border-indigo-200",
          className
        )}
      >
        {children}
      </button>
    </li>
  );
}

Tabs.Tab = Tab;

export default Tabs;
