import React, { DetailedHTMLProps, HTMLAttributes } from "react";

export interface DividerProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLHRElement>, HTMLHRElement> {}

export default function Divider(props: DividerProps) {
  return <hr {...props} />;
}
