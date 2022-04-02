import Input, { InputProps } from "../src/Input";
import { Meta, Story } from "@storybook/react";

const meta: Meta = {
  title: "Input",
};

export default meta;

const Template: Story<InputProps> = (args) => <Input {...args} />;

export const Default = Template.bind({});

Default.args = {
  placeholder: "john.doe@email.com",
  label: "Email",
  required: true,
  block: false,
  type: "text",
};
