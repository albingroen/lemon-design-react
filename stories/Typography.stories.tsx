import {
  Typography,
  HeadingProps,
  ParagraphProps,
  ErrorProps,
  LabelProps,
} from "../src";
import { Meta, Story } from "@storybook/react";

const meta: Meta = {
  title: "Typography",
};

export default meta;

// Heading
const HeadingTemplate: Story<HeadingProps> = (args) => (
  <Typography.Heading {...args} />
);

export const Heading = HeadingTemplate.bind({});

Heading.args = {
  children: "The quick brown fox jumps over the lazy dog",
  level: 1,
};

// Paragraph
const ParagraphTemplate: Story<ParagraphProps> = (args) => (
  <Typography.Paragraph {...args} />
);

export const Paragraph = ParagraphTemplate.bind({});

Paragraph.args = {
  children: "The quick brown fox jumps over the lazy dog",
  dim: false,
};

// Error
const ErrorTemplate: Story<ErrorProps> = (args) => (
  <Typography.Error {...args} />
);

export const Error = ErrorTemplate.bind({});

Error.args = {
  children: "The quick brown fox jumps over the lazy dog",
};

// Label
const LabelTemplate: Story<LabelProps> = (args) => (
  <Typography.Label {...args} />
);

export const Label = LabelTemplate.bind({});

Label.args = {
  children: "The quick brown fox jumps over the lazy dog",
  required: false,
};
