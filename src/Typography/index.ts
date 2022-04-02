import Heading, {
  HeadingProps,
  CustomHeadingProps,
  getHeadingStyles,
} from "./Heading";

import Paragraph, {
  ParagraphProps,
  CustomParagraphProps,
  getParagraphStyles,
} from "./Paragraph";

import Error, { ErrorProps, CustomErrorProps, getErrorStyles } from "./Error";

import Label, { LabelProps, CustomLabelProps, getLabelStyles } from "./Label";

const Typography = { Heading, Paragraph, Error, Label };

export default Typography;

export {
  HeadingProps,
  CustomHeadingProps,
  getHeadingStyles,
  ParagraphProps,
  CustomParagraphProps,
  getParagraphStyles,
  ErrorProps,
  CustomErrorProps,
  getErrorStyles,
  LabelProps,
  CustomLabelProps,
  getLabelStyles,
};
