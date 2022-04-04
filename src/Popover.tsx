import React, { Fragment, ReactNode } from "react";
import classNames from "./lib/classNames";
import { Popover as PopoverPrimitive, Transition } from "@headlessui/react";

export type PopoverAlign = "left" | "center" | "right";

export interface PopoverProps {
  wrapperClassName?: string;
  panelClassName?: string;
  align?: PopoverAlign;
  children: ReactNode;
  content: ReactNode;
}

export function getPopoverStyles(align: PopoverAlign = "left") {
  const popoverStyles = {
    base: "w-screen max-w-lg transform bg-white p-4 rounded-md shadow-lg border border-gray-100 focus:outline-none absolute z-10 transform mt-2",
    align: {
      center: "-translate-x-1/2 left-1/2",
      right: "right-0",
      left: "left-0",
    },
  };

  return classNames(popoverStyles.base, popoverStyles.align[align]);
}

export default function Popover({
  panelClassName,
  children,
  content,
  align,
}: PopoverProps) {
  return (
    <PopoverPrimitive className={classNames("relative w-max", panelClassName)}>
      <PopoverPrimitive.Button as={Fragment}>
        {children}
      </PopoverPrimitive.Button>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-200"
        enterFrom="opacity-0 translate-y-1"
        enterTo="opacity-100 translate-y-0"
        leave="transition ease-in duration-150"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 translate-y-1"
      >
        <PopoverPrimitive.Panel
          className={classNames(getPopoverStyles(align), panelClassName)}
        >
          {content}
        </PopoverPrimitive.Panel>
      </Transition>
    </PopoverPrimitive>
  );
}
