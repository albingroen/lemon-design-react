import React, { DetailedHTMLProps, HTMLAttributes } from "react";
import Spinner from "./Spinner";
import classNames from "./lib/classNames";
import { CustomButtonProps, getButtonStyles } from "./Button";

export interface LinkButtonProps
  extends DetailedHTMLProps<
      HTMLAttributes<HTMLAnchorElement>,
      HTMLAnchorElement
    >,
    CustomButtonProps {}

export default function LinkButton({
  iconPosition,
  className,
  children,
  variant,
  loading,
  shape,
  block,
  size,
  icon,
  ...rest
}: LinkButtonProps) {
  return (
    <a
      {...rest}
      className={classNames(
        getButtonStyles({
          iconPosition,
          variant,
          loading,
          block,
          icon,
          shape,
          size,
        }),
        className
      )}
    >
      {iconPosition === "left" &&
        (loading ? <Spinner size="small" /> : icon && <span>{icon}</span>)}

      <span>{children}</span>

      {iconPosition === "right" &&
        (loading ? <Spinner size="small" /> : icon && <span>{icon}</span>)}
    </a>
  );
}
