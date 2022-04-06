import React, { forwardRef, Fragment, ReactNode } from "react";
import classNames from "../lib/classNames";
import { DropdownItemButton, DropdownItemLink } from "./DropdownItem";
import { Menu as MenuPrimitives, Transition } from "@headlessui/react";

export interface CustomDropdownProps {
  align?: "left" | "center" | "right";
  children: ReactNode;
  trigger: ReactNode;
}

export interface DropdownProps extends CustomDropdownProps {}

function Dropdown({ align = "right", children, trigger }: DropdownProps) {
  return (
    <MenuPrimitives as="div" className="relative inline-block text-left">
      <div>
        <MenuPrimitives.Button as={Fragment}>{trigger}</MenuPrimitives.Button>
      </div>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-5"
      >
        <MenuPrimitives.Items
          className={classNames(
            "absolute w-56 mt-2 bg-white divide-y divide-gray-200 rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none",
            {
              center: "origin-center left-1/2 transform -translate-x-1/2",
              right: "origin-top-right right-0",
              left: "origin-top-left left-0",
            }[align]
          )}
        >
          {children}
        </MenuPrimitives.Items>
      </Transition>
    </MenuPrimitives>
  );
}

export interface DropdownItemGroupProps {
  children: ReactNode;
}

export function DropdownItemGroup({ children }: DropdownItemGroupProps) {
  return <div className="py-1">{children}</div>;
}

Dropdown.ItemLink = forwardRef(DropdownItemLink);

Dropdown.ItemButton = DropdownItemButton;

Dropdown.Group = DropdownItemGroup;

export default Dropdown;
