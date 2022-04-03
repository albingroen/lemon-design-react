import Tag, { TagProps } from "../src/Tag";
import { Meta, Story } from "@storybook/react";

const meta: Meta = {
  title: "Tag",
};

export default meta;

const Template: Story<TagProps> = (args) => <Tag {...args} />;

export const Default = Template.bind({});

Default.args = {
  children: "Verified",
  variant: "default",
};
