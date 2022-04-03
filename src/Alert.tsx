import { XIcon } from "@heroicons/react/outline";
import {
  InformationCircleIcon,
  ExclamationCircleIcon,
  ExclamationIcon,
  CheckCircleIcon,
} from "@heroicons/react/solid";
import React, { DetailedHTMLProps, HTMLAttributes } from "react";
import Button from "./Button";
import classNames from "./lib/classNames";
import Stack from "./Stack";
import Typography from "./Typography";

export type AlertVariant = "info" | "warning" | "danger" | "success";

export interface CustomAlertProps {
  variant?: AlertVariant;
  onClose?: () => void;
  description?: string;
  heading: string;
}

export interface AlertProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
    CustomAlertProps {}

export function getAlertIcon(variant: AlertVariant = "info") {
  switch (variant) {
    case "info":
      return <InformationCircleIcon className="w-7 text-indigo-500" />;
    case "warning":
      return <ExclamationIcon className="w-7 text-yellow-500" />;
    case "success":
      return <CheckCircleIcon className="w-7 text-green-500" />;
    case "danger":
      return <ExclamationCircleIcon className="w-7 text-red-500" />;
    default:
      return <InformationCircleIcon className="w-7 text-gray-500" />;
  }
}

export function getAlertStyles(variant: AlertVariant = "info") {
  const alertStyles = {
    base: "p-4 rounded-lg border relative",
    variant: {
      info: "bg-indigo-100 border-indigo-200 text-indigo-700",
      warning: "bg-yellow-100 border-yellow-300 text-yellow-700",
      success: "bg-green-100 border-green-200 text-green-700",
      danger: "bg-red-100 border-red-200 text-red-700",
    },
  };

  return classNames(alertStyles.base, alertStyles.variant[variant]);
}

export default function Alert({
  description,
  className,
  heading,
  variant,
  onClose,
  ...rest
}: AlertProps) {
  const icon = getAlertIcon(variant);

  return (
    <div {...rest} className={classNames(getAlertStyles(variant), className)}>
      <Stack align="start">
        {icon}
        <Stack direction="vertical" className="!gap-0.5">
          <Typography.Heading level={4}>{heading}</Typography.Heading>
          <Typography.Paragraph>{description}</Typography.Paragraph>
        </Stack>
      </Stack>

      {onClose && (
        <Button
          className="!p-1 !h-auto !border-none !shadow-none !bg-transparent !rounded group absolute top-3 right-4 !text-inherit opacity-50 hover:opacity-100"
          size="small"
        >
          <XIcon className="w-5" />
        </Button>
      )}
    </div>
  );
}
