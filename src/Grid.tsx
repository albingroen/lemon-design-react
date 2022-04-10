import React, { DetailedHTMLProps, HTMLAttributes } from "react";
import classNames from "./lib/classNames";

export interface GridProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export default function Grid({ className, ...rest }: GridProps) {
  return <div {...rest} className={classNames("grid", className)} />;
}
