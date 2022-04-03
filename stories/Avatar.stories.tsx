import Avatar, { AvatarProps } from "../src/Avatar/Avatar";
import { Meta, Story } from "@storybook/react";

const meta: Meta = {
  title: "Avatar",
};

export default meta;

const Template: Story<AvatarProps> = (args) => <Avatar {...args} />;

export const Default = Template.bind({});

Default.args = {
  src: "https://i.pravatar.cc/300",
  size: "default",
};
