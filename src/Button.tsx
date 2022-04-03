import React, {
  DetailedHTMLProps,
  ButtonHTMLAttributes,
  ReactNode,
  forwardRef,
  Ref,
} from "react";
import classNames from "./lib/classNames";
import Spinner from "./Spinner";

export interface CustomButtonProps {
  variant?: "default" | "primary" | "danger" | "warning" | "success";
  size?: "default" | "small" | "large";
  iconPosition?: "left" | "right";
  shape?: "square" | "round";
  loading?: boolean;
  icon?: ReactNode;
  block?: boolean;
}

export interface ButtonProps
  extends DetailedHTMLProps<
      ButtonHTMLAttributes<HTMLButtonElement>,
      HTMLButtonElement
    >,
    CustomButtonProps {}

export function getButtonStyles({
  variant = "default",
  shape = "square",
  size = "default",
  block = false,
}: CustomButtonProps) {
  const buttonStyles = {
    base: "leading-none inline-flex items-center justify-center border font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 transition disabled:opacity-50 disabled:pointer-events-none",
    block: "w-full",
    size: {
      default: {
        base: "px-3.5 text-base h-[42px] space-x-2.5",
        shape: {
          square: "rounded-lg",
          round: "rounded-full",
        },
      },
      small: {
        base: "px-2.5 text-sm h-[35px] space-x-2",
        shape: {
          square: "rounded-md",
          round: "rounded-full",
        },
      },
      large: {
        base: "px-4 text-lg h-[50px] space-x-3",
        shape: {
          square: "rounded-lg",
          round: "rounded-full",
        },
      },
    },
    variant: {
      default:
        "border-gray-300 shadow-sm text-gray-700 bg-white hover:bg-gray-50 focus:ring-gray-300",
      primary:
        "border-indigo-600 shadow-sm shadow-indigo-300 bg-indigo-600 text-white hover:bg-indigo-700 hover:border-indigo-700 focus:ring-indigo-400",
      danger:
        "border-red-600 shadow-sm shadow-red-300 bg-red-600 text-white hover:bg-red-700 hover:border-red-700 focus:ring-red-400",
      warning:
        "border-yellow-400 shadow-sm shadow-yellow-200 bg-yellow-400 hover:bg-yellow-500 hover:border-yellow-500 focus:ring-yellow-500",
      success:
        "border-green-600 shadow-sm shadow-green-300 bg-green-600 text-white hover:bg-green-700 hover:border-green-700 focus:ring-green-400",
    },
  };

  return classNames(
    buttonStyles.size[size].shape[shape],
    buttonStyles.variant[variant],
    buttonStyles.size[size].base,
    block && buttonStyles.block,
    buttonStyles.base
  );
}

function Button(
  {
    iconPosition = "right",
    className,
    children,
    disabled,
    variant,
    loading,
    shape,
    block,
    size,
    icon,
    ...rest
  }: ButtonProps,
  ref: Ref<HTMLButtonElement>
) {
  return (
    <button
      {...rest}
      ref={ref}
      disabled={disabled || loading}
      className={classNames(
        getButtonStyles({ variant, shape, size, block, iconPosition }),
        className
      )}
    >
      {iconPosition === "left" &&
        (loading ? <Spinner size="small" /> : icon && <span>{icon}</span>)}

      <span>{children}</span>

      {iconPosition === "right" &&
        (loading ? <Spinner size="small" /> : icon && <span>{icon}</span>)}
    </button>
  );
}

export default forwardRef(Button);
