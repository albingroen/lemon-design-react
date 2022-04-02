import { Button, ButtonProps, LinkButton, LinkButtonProps } from "../src";
import { ExternalLinkIcon, MailIcon } from "@heroicons/react/solid";
import { Meta, Story } from "@storybook/react";

const meta: Meta = {
  title: "Button",
};

export default meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Default = Template.bind({});

Default.args = {
  children: "Basic button",
  iconPosition: "right",
  variant: "default",
  loading: false,
  shape: "square",
  size: "default",
  block: false,
  icon: <MailIcon className="w-4" />,
};

const LinkButtonTemplate: Story<LinkButtonProps> = (args) => (
  <LinkButton {...args} />
);

export const WithLink = LinkButtonTemplate.bind({});

WithLink.args = {
  children: "Search on Google",
  href: "https://google.com",
  rel: "noopener noreferrer",
  iconPosition: "right",
  variant: "default",
  target: "_blank",
  loading: false,
  shape: "square",
  size: "default",
  block: false,
  icon: <ExternalLinkIcon className="w-4" />,
};
