import Button from "./Button";
import React, { useState, Fragment, ReactNode } from "react";
import Stack from "./Stack";
import Typography from "./Typography";
import classNames from "./lib/classNames";
import { Dialog, Transition } from "@headlessui/react";
import { XIcon } from "@heroicons/react/outline";

const { Overlay, Title, Description } = Dialog;

export function getDrawerOverlayStyles() {
  const drawerOverlayStyles = {
    base: "bg-black bg-opacity-40 fixed inset-0",
  };

  return classNames(drawerOverlayStyles.base);
}

export function getDrawerContentStyles() {
  const drawerContentStyles = {
    base: "bg-white w-full max-w-md fixed divide-y top-0 right-0 bottom-0 focus:outline-none",
  };

  return classNames(drawerContentStyles.base);
}

export interface CustomDrawerProps {
  children?: ReactNode | (({ onClose }: { onClose?: () => void }) => ReactNode);
  overlayClassName?: string;
  contentClassName?: string;
  showCloseButton?: boolean;
  onClose?: () => void;
  description?: string;
  heading?: string;
}

export interface DrawerProps extends CustomDrawerProps {}

export default function Drawer({
  showCloseButton = true,
  overlayClassName,
  contentClassName,
  description,
  heading,
  children,
  onClose,
}: DrawerProps) {
  const [open, setOpen] = useState<boolean>(true);

  function handleClose() {
    if (!onClose) return;

    setOpen(false);
    setTimeout(() => {
      onClose();
    }, 300);
  }

  return (
    <Transition appear show={open} as={Fragment}>
      <Dialog onClose={handleClose} open>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-150"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Overlay
            className={classNames(getDrawerOverlayStyles(), overlayClassName)}
          />
        </Transition.Child>

        <Transition.Child
          as={Fragment}
          enterFrom="opacity-0 translate-x-[400px]"
          leaveTo="opacity-0 translate-x-[400px]"
          leaveFrom="opacity-100 translate-x-0"
          enterTo="opacity-100 translate-x-0"
          enter="ease-out duration-300"
          leave="ease-in duration-200"
        >
          <div
            className={classNames(getDrawerContentStyles(), contentClassName)}
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
