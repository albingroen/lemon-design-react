import React, { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";
import Stack from "./Stack";
import Typography from "./Typography";

export interface CustomNavbarProps {
  description?: string;
  extra?: ReactNode;
  heading?: string;
}

export interface NavbarProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>,
    CustomNavbarProps {}

export default function Navbar({ extra, heading, description }: NavbarProps) {
  return (
    <nav className="border-b bg-white w-full">
      <div className="max-w-screen-xl mx-auto px-6 py-4 flex items-center justify-between">
        {heading || description ? (
          <Stack direction="vertical" spacing="px">
            {heading && (
              <Typography.Heading className="!text-xl">
                {heading}
              </Typography.Heading>
            )}

            {description && (
              <Typography.Paragraph className="!text-sm" dim>
                {description}
              </Typography.Paragraph>
            )}
          </Stack>
        ) : (
          <span />
        )}

        {extra}
      </div>
    </nav>
  );
}
