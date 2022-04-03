import React, { DetailedHTMLProps, ImgHTMLAttributes } from "react";
import classNames from "../lib/classNames";

export interface CustomAvatarProps {
  size?: "default" | "small" | "large";
}

export interface AvatarProps
  extends DetailedHTMLProps<
      ImgHTMLAttributes<HTMLImageElement>,
      HTMLImageElement
    >,
    CustomAvatarProps {}

export function getAvatarStyles({ size = "default" }: CustomAvatarProps) {
  console.log({
    size,
  });

  const avatarStyles = {
    base: "inline-block rounded-full",
    size: {
      default: "h-10 w-10 avatar-default",
      large: "h-14 w-14 avatar-large",
      small: "h-8 w-8 avatar-small",
    },
  };

  return classNames(avatarStyles.base, avatarStyles.size[size]);
}

export default function Avatar({ className, size, ...rest }: AvatarProps) {
  return (
    <img
      {...rest}
      className={classNames(getAvatarStyles({ size }), className)}
    />
  );
}
