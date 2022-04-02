import { HeadingProps, Typography } from "../src";
import { Meta, Story } from "@storybook/react";

const meta: Meta = {
  title: "Typography",
};

export default meta;

const HeadingTemplate: Story<HeadingProps> = (args) => (
  <Typography.Heading {...args} />
);

export const Heading = HeadingTemplate.bind({});

Heading.args = {
  children: "The quick brown fox jumps over the lazy dog",
  level: 1,
};
