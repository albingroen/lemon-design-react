import { Button, ButtonProps } from "../src";
import { MailIcon } from "@heroicons/react/solid";
import { Meta, Story } from "@storybook/react";

const meta: Meta = {
  title: "Button",
  component: Button,
};

export default meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Default = Template.bind({});

Default.args = {
  icon: <MailIcon className="w-4" />,
  children: "Basic button",
  iconPosition: "right",
  variant: "default",
  shape: "square",
  size: "default",
  block: false,
};
