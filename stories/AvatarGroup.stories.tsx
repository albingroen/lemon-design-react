import Avatar from "../src/Avatar/Avatar";
import AvatarGroup, { AvatarGroupProps } from "../src/Avatar/AvatarGroup";
import { Meta, Story } from "@storybook/react";

const meta: Meta = {
  title: "AvatarGroup",
};

export default meta;

const Template: Story<AvatarGroupProps> = (args) => <AvatarGroup {...args} />;

export const Default = Template.bind({});

Default.args = {
  children: (
    <>
      <Avatar size="small" src="https://i.pravatar.cc/300" />
      <Avatar size="small" src="https://i.pravatar.cc/300" />
      <Avatar size="small" src="https://i.pravatar.cc/300" />
    </>
  ),
};
