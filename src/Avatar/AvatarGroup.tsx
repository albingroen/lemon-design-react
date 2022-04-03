import React, { DetailedHTMLProps, HTMLAttributes } from "react";
import Stack, { CustomStackProps } from "../Stack";
import classNames from "../lib/classNames";

export interface CustomAvatarGroupProps extends CustomStackProps {}

export interface AvatarGroupProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
    CustomStackProps {}

export function getAvatarGroupStyles() {
  const avatarGroupStyles = {
    base: "-space-x-4 avatar-group",
  };

  return classNames(avatarGroupStyles.base);
}

export default function AvatarGroup({ children, ...rest }: AvatarGroupProps) {
  return (
    <Stack
      {...rest}
      align="center"
      className={classNames(getAvatarGroupStyles(), rest.className)}
    >
      {children}
    </Stack>
  );
}
