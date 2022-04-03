import React, {
  DetailedHTMLProps,
  forwardRef,
  HTMLAttributes,
  Ref,
} from "react";
import Spinner from "./Spinner";
import classNames from "./lib/classNames";
import { CustomButtonProps, getButtonStyles } from "./Button";

export interface LinkButtonProps
  extends DetailedHTMLProps<
      HTMLAttributes<HTMLAnchorElement>,
      HTMLAnchorElement
    >,
    CustomButtonProps {}

function LinkButton(
  {
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
  }: LinkButtonProps,
  ref: Ref<HTMLAnchorElement>
) {
  return (
    <a
      {...rest}
      ref={ref}
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

export default forwardRef(LinkButton);
