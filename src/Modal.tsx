import * as DialogPrimitives from "@radix-ui/react-dialog";
import Button from "./Button";
import React, { ReactNode } from "react";
import Stack from "./Stack";
import Typography from "./Typography";
import classNames from "./lib/classNames";
import { XIcon } from "@heroicons/react/outline";

const { Root, Portal, Overlay, Title, Description, Close, Content } =
  DialogPrimitives;

export interface CustomModalProps {
  children?: ReactNode | (({ onClose }: { onClose?: () => void }) => ReactNode);
  overlayClassName?: string;
  contentClassName?: string;
  showCloseButton?: boolean;
  onClose?: () => void;
  description?: string;
  heading?: string;
}

export interface ModalProps extends CustomModalProps {}

export function getModalOverlayStyles() {
  const modalOverlayStyles = {
    base: "bg-black bg-opacity-50 fixed inset-0",
  };

  return classNames(modalOverlayStyles.base);
}

export function getModalContentStyles() {
  const modalContentStyles = {
    base: "bg-white w-full max-w-md rounded-lg fixed divide-y left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2",
  };

  return classNames(modalContentStyles.base);
}

export default function Modal({
  showCloseButton = true,
  overlayClassName,
  contentClassName,
  description,
  children,
  onClose,
  heading,
}: ModalProps) {
  return (
    <Root
      onOpenChange={(open) => {
        if (!open && onClose) {
          onClose();
        }
      }}
      open
    >
      <Portal>
        <Overlay
          className={classNames(getModalOverlayStyles(), overlayClassName)}
        />

        <Content
          className={classNames(getModalContentStyles(), contentClassName)}
        >
          {heading && (
            <Stack className="px-4 py-3.5" align="center" justify="between">
              {heading && (
                <Title asChild>
                  <Typography.Heading level={3}>{heading}</Typography.Heading>
                </Title>
              )}

              {showCloseButton && (
                <Close asChild>
                  <Button
                    className="!p-1 !h-auto !border-none !shadow-none !rounded group"
                    size="small"
                  >
                    <XIcon className="w-4 text-gray-500 group-hover:text-inherit transition" />
                  </Button>
                </Close>
              )}
            </Stack>
          )}

          <Stack
            direction="vertical"
            spacing="large"
            className="p-5"
            align="start"
          >
            {description && (
              <Description asChild>
                <Typography.Paragraph dim>{description}</Typography.Paragraph>
              </Description>
            )}

            {children &&
              (typeof children === "function"
                ? children({ onClose })
                : children)}
          </Stack>
        </Content>
      </Portal>
    </Root>
  );
}
