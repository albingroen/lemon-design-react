import React, {
  DetailedHTMLProps,
  OptionHTMLAttributes,
  SelectHTMLAttributes,
} from "react";
import { CustomButtonProps, getButtonStyles } from "./Button";
import classNames from "./lib/classNames";

export interface CustomSelectProps
  extends Omit<CustomButtonProps, "loading" | "icon" | "iconPosition"> {}

export interface SelectProps
  extends Omit<
      DetailedHTMLProps<
        SelectHTMLAttributes<HTMLSelectElement>,
        HTMLSelectElement
      >,
      "size"
    >,
    CustomSelectProps {}

export function getSelectStyles({
  size = "default",
  ...rest
}: CustomSelectProps) {
  const selectStyles = {
    size: {
      default: "!pr-9",
      large: "!pr-10",
      small: "!pr-8",
    },
  };

  return classNames(
    getButtonStyles({ size, ...rest }),
    selectStyles.size[size]
  );
}

function Select({
  className,
  children,
  variant,
  shape,
  block,
  size,
  ...rest
}: SelectProps) {
  return (
    <select
      {...rest}
      className={classNames(
        getSelectStyles({
          variant,
          block,
          shape,
          size,
        }),
        className
      )}
    >
      {children}
    </select>
  );
}

interface OptionProps
  extends DetailedHTMLProps<
    OptionHTMLAttributes<HTMLOptionElement>,
    HTMLOptionElement
  > {}

function Option({ children }: OptionProps) {
  return <option>{children}</option>;
}

Select.Option = Option;

export default Select;
