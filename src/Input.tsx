import React, { DetailedHTMLProps, InputHTMLAttributes } from "react";
import Typography from "./Typography";
import classNames from "./lib/classNames";

export interface CustomInputProps {
  description?: string;
  block?: boolean;
  error?: string;
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
  description,
  className,
  error,
  block,
  label,
  ...rest
}: InputProps) {
  return (
    <div>
      {label && (
        <Typography.Label
          required={rest.required}
          htmlFor={rest.id}
          className="mb-1"
        >
          {label}
        </Typography.Label>
      )}

      <input
        {...rest}
        className={classNames(getInputStyles({ label, block }), className)}
      />

      {error && (
        <Typography.Error className="!text-sm mt-2 block">
          {error}
        </Typography.Error>
      )}

      {description && (
        <Typography.Paragraph className="!text-sm mt-2 block" dim>
          {description}
        </Typography.Paragraph>
      )}
    </div>
  );
}
