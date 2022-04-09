import AvatarGroup from "./AvatarGroup";
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
  const avatarStyles = {
    base: "inline-block rounded-full",
    size: {
      default: "h-9 w-9 avatar-default",
      large: "h-14 w-14 avatar-large",
      small: "h-6 w-6 avatar-small",
    },
  };

  return classNames(avatarStyles.base, avatarStyles.size[size]);
}

function Avatar({ className, size, ...rest }: AvatarProps) {
  return (
    <img
      {...rest}
      className={classNames(getAvatarStyles({ size }), className)}
    />
  );
}

Avatar.Group = AvatarGroup;

export default Avatar;
