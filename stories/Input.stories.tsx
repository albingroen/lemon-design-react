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
  description: "",
  required: true,
  label: "Email",
  block: false,
  type: "text",
  id: "email",
  error: "",
};
