import Button from "./Button";
import React, { Fragment, ReactNode, useState } from "react";
import Stack from "./Stack";
import Typography from "./Typography";
import classNames from "./lib/classNames";
import { Dialog, Transition } from "@headlessui/react";
import { XIcon } from "@heroicons/react/outline";

const { Overlay, Title, Description } = Dialog;

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
    base: "bg-white w-full max-w-md rounded-lg fixed divide-y left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 focus:outline-none",
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
  const [open, setOpen] = useState<boolean>(true);

  function handleClose() {
    if (!onClose) return;

    setOpen(false);
    setTimeout(() => {
      onClose();
    }, 150);
  }

  return (
    <Transition appear show={open} as={Fragment}>
      <Dialog onClose={handleClose} open>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-200"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Overlay
            className={classNames(getModalOverlayStyles(), overlayClassName)}
          />
        </Transition.Child>

        <Transition.Child
          as={Fragment}
          enter="ease-out duration-200"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="ease-in duration-100"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <div
            className={classNames(getModalContentStyles(), contentClassName)}
          >
            {heading && (
              <Stack className="px-4 py-3.5" align="center" justify="between">
                {heading && (
                  <Title as={Fragment}>
                    <Typography.Heading level={3}>{heading}</Typography.Heading>
                  </Title>
                )}

                {showCloseButton && (
                  <Button
                    className="!p-1 !h-auto !border-none !shadow-none !rounded group"
                    onClick={handleClose}
                    size="small"
                  >
                    <XIcon className="w-5 text-gray-500 group-hover:text-inherit transition" />
                  </Button>
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
                <Description as={Fragment}>
                  <Typography.Paragraph dim>{description}</Typography.Paragraph>
                </Description>
              )}

              {children &&
                (typeof children === "function"
                  ? children({ onClose: handleClose })
                  : children)}
            </Stack>
          </div>
        </Transition.Child>
      </Dialog>
    </Transition>
  );
}
