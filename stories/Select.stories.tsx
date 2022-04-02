import { Select, SelectProps } from "../src";
import { Meta, Story } from "@storybook/react";

const meta: Meta = {
  title: "Select",
};

export default meta;

const Template: Story<SelectProps> = (args) => <Select {...args} />;

export const Default = Template.bind({});

Default.args = {
  children: (
    <>
      <Select.Option value={1}>Option 1</Select.Option>
      <Select.Option value={2}>Option 2</Select.Option>
      <Select.Option value={3}>Option 3</Select.Option>
    </>
  ),
  variant: "default",
  shape: "square",
  size: "default",
  disabled: false,
  block: false,
};
