import React, { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";
import classNames from "./lib/classNames";
import Stack, { CustomStackProps } from "./Stack";
import Typography from "./Typography";

export interface CustomEmptyProps {
  description?: string;
  icon?: ReactNode;
  heading?: string;
}

export interface EmptyProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
    CustomEmptyProps,
    CustomStackProps {}

export function getEmptyStyles() {
  const emptyStyles = {
    base: "text-center p-6 rounded-lg border-2 border-dashed",
  };

  return classNames(emptyStyles.base);
}

export default function Empty({
  description,
  className,
  children,
  heading,
  icon,
  ...rest
}: EmptyProps) {
  return (
    <Stack
      direction="vertical"
      spacing="large"
      align="center"
      {...rest}
      className={classNames(getEmptyStyles(), className)}
    >
      <Stack
        className="text-center"
        direction="vertical"
        spacing="small"
        align="center"
      >
        {icon}

        <Stack
          className="text-center !gap-0.5"
          direction="vertical"
          align="center"
        >
          {heading && (
            <Typography.Heading level={4}>{heading}</Typography.Heading>
          )}

          {description && (
            <Typography.Paragraph className="max-w-md" dim>
              {description}
            </Typography.Paragraph>
          )}
        </Stack>
      </Stack>

      {children}
    </Stack>
  );
}
