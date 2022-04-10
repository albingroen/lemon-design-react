import React, {
  ButtonHTMLAttributes,
  DetailedHTMLProps,
  useState,
} from "react";
import Stack, { StackProps } from "./Stack";
import classNames from "./lib/classNames";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/solid";
import { arrayFromNumber, chunk } from "./lib/utils";

export interface PaginationProps extends Omit<StackProps, "onChange"> {
  onChange?: (page: number) => void;
  limit?: number;
  pages: number;
  page: number;
}

export default function Pagination({
  page: currentPage,
  pages: allPages,
  className,
  limit = 3,
  onChange,
  ...rest
}: PaginationProps) {
  const [section, setSection] = useState<number>(0);

  const prevPage = currentPage - 1;
  const nextPage = currentPage + 1;

  const sections = chunk(arrayFromNumber(allPages), limit);

  const previousSection = sections[section - 1];
  const nextSection = sections[section + 1];

  const pages = sections[section];

  return (
    <Stack
      spacing="none"
      {...rest}
      className={classNames(
        "border border-gray-300 rounded-md overflow-hidden divide-x divide-gray-300 !inline-flex shadow-sm",
        className
      )}
    >
      <PaginationButton
        disabled={!onChange || prevPage < 0}
        onClick={() => {
          if (onChange) {
            if (previousSection?.includes(prevPage)) {
              setSection(section - 1);
              onChange(prevPage);
            } else {
              onChange(prevPage);
            }
          }
        }}
      >
        <ChevronLeftIcon className="w-4" />
      </PaginationButton>

      {pages.map((page) => {
        const isActive = page === currentPage;

        return (
          <PaginationButton
            disabled={!onChange}
            isActive={isActive}
            key={page}
            onClick={() => {
              if (onChange) {
                onChange(page);
              }
            }}
          >
            {page + 1}
          </PaginationButton>
        );
      })}

      <PaginationButton
        disabled={!onChange || nextPage === allPages}
        onClick={() => {
          if (onChange) {
            if (nextSection?.includes(nextPage)) {
              setSection(section + 1);
              onChange(nextPage);
            } else {
              onChange(nextPage);
            }
          }
        }}
      >
        <ChevronRightIcon className="w-4" />
      </PaginationButton>
    </Stack>
  );
}

interface PaginationButtonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  isActive?: boolean;
}

function PaginationButton({
  className,
  isActive,
  children,
  ...rest
}: PaginationButtonProps) {
  return (
    <button
      {...rest}
      className={classNames(
        "px-3.5 py-2 transition disabled:pointer-events-none disabled:opacity-40",
        isActive ? "bg-indigo-500 text-white" : "hover:bg-gray-100",
        className
      )}
    >
      {children}
    </button>
  );
}
