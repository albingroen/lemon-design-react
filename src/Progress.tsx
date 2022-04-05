import React, { DetailedHTMLProps, HTMLAttributes } from "react";
import Stack, { CustomStackProps } from "./Stack";
import Typography from "./Typography";
import classNames from "./lib/classNames";

export interface CustomProgressProps {
  value: number;
  max: number;
}

export interface ProgressProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
    CustomProgressProps,
    CustomStackProps {}

export function getProgressStyles() {
  const progressStyles = {
    base: "h-2 rounded-full overflow-hidden bg-gray-100 flex-1",
  };

  return classNames(progressStyles.base);
}

export default function Progress({
  children,
  value,
  max,
  ...rest
}: ProgressProps) {
  const percentage = (value / max) * 100;

  return (
    <Stack align="center" {...rest}>
      <div className={getProgressStyles()}>
        <div
          className="bg-indigo-500 h-full rounded-full"
          style={{
            width: `${percentage}%`,
          }}
        />
      </div>

      <Typography.Paragraph dim>{children}</Typography.Paragraph>
    </Stack>
  );
}
