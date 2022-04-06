import React from "react";
import classNames from "./lib/classNames";
import { Switch as SwitchPrimitive } from "@headlessui/react";

export interface SwitchProps {
  onChange?: (value: boolean) => void;
  className?: string;
  disabled?: boolean;
  checked?: boolean;
}

export default function Switch({
  className,
  disabled,
  onChange,
  checked,
}: SwitchProps) {
  return (
    <SwitchPrimitive
      className={classNames(
        "p-0.5 w-11 rounded-full transition-colors ease-in-out duration-200",
        checked ? "bg-indigo-500" : "bg-gray-200",
        className
      )}
      onChange={onChange ?? (() => undefined)}
      disabled={!onChange || disabled}
      checked={checked ?? false}
    >
      <span
        className={classNames(
          "h-5 w-5 bg-white rounded-full shadow block transition ease-in-out duration-200",
          checked && "translate-x-5"
        )}
      />
    </SwitchPrimitive>
  );
}
