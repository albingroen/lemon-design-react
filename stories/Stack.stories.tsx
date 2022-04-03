import Button from "../src/Button";
import Stack, { StackProps } from "../src/Stack";
import { Meta, Story } from "@storybook/react";

const meta: Meta = {
  title: "Stack",
};

export default meta;

const Template: Story<StackProps> = (args) => <Stack {...args} />;

export const Default = Template.bind({});

Default.args = {
  justify: "start",
  spacing: "small",
  align: "stretch",
  children: (
    <>
      <Button>Create</Button>
      <Button>Update</Button>
      <Button>Delete</Button>
    </>
  ),
};
