import React, { FC, HTMLAttributes, ReactChild } from "react";

export interface Props extends HTMLAttributes<HTMLDivElement> {
  children?: ReactChild;
}

export const Thing: FC<Props> = ({ children }) => {
  return (
    <div className="bg-blue-500 text-white p-1 rounded-md">
      {children || `the snozzberries taste like snozzberries`}
    </div>
  );
};
