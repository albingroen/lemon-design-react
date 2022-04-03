import Checkbox, { CheckboxProps } from "../src/Checkbox";
import { Meta, Story } from "@storybook/react";

const meta: Meta = {
  title: "Checkbox",
};

export default meta;

const Template: Story<CheckboxProps> = (args) => <Checkbox {...args} />;

export const Default = Template.bind({});

Default.args = {
  description: "You agree to the terms & services when signing up",
  label: "I agree to the terms & services",
  id: "agreements",
  required: false,
};
