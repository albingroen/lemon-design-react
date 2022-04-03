import React, { DetailedHTMLProps, InputHTMLAttributes } from "react";
import classNames from "./lib/classNames";
import Stack from "./Stack";
import Typography from "./Typography";

export interface CustomCheckboxProps {
  description?: string;
  label?: string;
}

export interface CheckboxProps
  extends DetailedHTMLProps<
      InputHTMLAttributes<HTMLInputElement>,
      HTMLInputElement
    >,
    CustomCheckboxProps {}

export function getCheckboxStyles() {
  const checkboxStyles = {
    base: "focus:ring-gray-400 h-5 w-5 border-gray-300 hover:bg-gray-100 transition rounded",
  };

  return classNames(checkboxStyles.base);
}

export default function Checkbox({
  description,
  className,
  label,
  ...rest
}: CheckboxProps) {
  return (
    <Stack align="start">
      <input
        {...rest}
        type="checkbox"
        className={classNames(getCheckboxStyles(), className)}
      />

      {label && (
        <Stack direction="vertical" spacing="mini">
          <Typography.Label htmlFor={rest.id}>{label}</Typography.Label>
          {description && (
            <Typography.Paragraph className="!text-xs" dim>
              {description}
            </Typography.Paragraph>
          )}
        </Stack>
      )}
    </Stack>
  );
}
