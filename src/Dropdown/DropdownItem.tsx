import React, {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  DetailedHTMLProps,
  ReactNode,
  Ref,
} from "react";
import classNames from "../lib/classNames";
import { Menu as MenuPrimitives } from "@headlessui/react";

export interface CustomDropdownItemProps {
  variant?: "default" | "danger" | "primary" | "warning" | "success";
  icon?: ReactNode;
}

export interface DropdownItemButtonProps
  extends DetailedHTMLProps<
      ButtonHTMLAttributes<HTMLButtonElement>,
      HTMLButtonElement
    >,
    CustomDropdownItemProps {}

export function DropdownItemButton({
  variant,
  children,
  className,
  icon,
  ...rest
}: DropdownItemButtonProps) {
  return (
    <MenuPrimitives.Item disabled={rest.disabled}>
      {({ active }) => (
        <button
          {...rest}
          className={classNames(
            getDropdowItemStyles({ variant, active }),
            className
          )}
        >
          {icon}
          <span>{children}</span>
        </button>
      )}
    </MenuPrimitives.Item>
  );
}

export interface DropdownItemLinkProps
  extends DetailedHTMLProps<
      AnchorHTMLAttributes<HTMLAnchorElement>,
      HTMLAnchorElement
    >,
    CustomDropdownItemProps {
  disabled?: boolean;
}

export function DropdownItemLink(
  {
    className,
    children,
    disabled,
    variant,
    icon,
    ...rest
  }: DropdownItemLinkProps,
  ref: Ref<HTMLAnchorElement>
) {
  return (
    <MenuPrimitives.Item disabled={disabled}>
      {({ active }) => (
        <a
          {...rest}
          ref={ref}
          className={classNames(
            getDropdowItemStyles({ variant, active }),
            className
          )}
        >
          {icon}
          <span>{children}</span>
        </a>
      )}
    </MenuPrimitives.Item>
  );
}

export function getDropdowItemStyles({
  active = false,
  variant = "default",
}: CustomDropdownItemProps & { active?: boolean }) {
  const dropdownItemStyles = {
    base: "group flex items-center w-full px-3 py-2 disabled:opacity-40 disabled:pointer-events-none space-x-2.5",
    variant: {
      primary: active ? "bg-indigo-500 text-white" : "text-gray-900",
      success: active ? "bg-green-500 text-white" : "text-gray-900",
      danger: active ? "bg-red-500 text-white" : "text-red-600",
      warning: active ? "bg-yellow-400" : "text-gray-900",
      default: active && "bg-gray-100",
    },
  };

  return classNames(
    dropdownItemStyles.base,
    dropdownItemStyles.variant[variant]
  );
}
