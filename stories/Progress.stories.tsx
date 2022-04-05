import Progress, { ProgressProps } from "../src/Progress";
import { Meta, Story } from "@storybook/react";

const meta: Meta = {
  title: "Progress",
};

export default meta;

const Template: Story<ProgressProps> = (args) => <Progress {...args} />;

export const Default = Template.bind({});

Default.args = {
  children: "32%",
  value: 32,
  max: 100,
};
