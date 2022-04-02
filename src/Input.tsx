import React, { DetailedHTMLProps, InputHTMLAttributes } from "react";
import Typography from "./Typography";
import classNames from "./lib/classNames";

export interface CustomInputProps {
  block?: boolean;
  label?: string;
}

export interface InputProps
  extends DetailedHTMLProps<
      InputHTMLAttributes<HTMLInputElement>,
      HTMLInputElement
    >,
    CustomInputProps {}

export function getInputStyles({ block }: CustomInputProps) {
  const inputStyles = {
    base: "shadow-sm placeholder-gray-400 block text-sm border-gray-300 rounded-md focus:ring-0 focus:border-gray-400",
    block: "w-full",
  };

  return classNames(inputStyles.base, block && inputStyles.block);
}

export default function Input({
  className,
  block,
  label,
  ...rest
}: InputProps) {
  return (
    <div className="space-y-1">
      {label && (
        <Typography.Label required={rest.required} id={rest.id}>
          {label}
        </Typography.Label>
      )}
      <input
        {...rest}
        className={classNames(getInputStyles({ label, block }), className)}
      />
    </div>
  );
}
