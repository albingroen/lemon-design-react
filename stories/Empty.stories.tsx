import Button from "../src/Button";
import Empty, { EmptyProps } from "../src/Empty";
import { Meta, Story } from "@storybook/react";
import { ViewBoardsIcon } from "@heroicons/react/outline";

const meta: Meta = {
  title: "Empty",
};

export default meta;

const Template: Story<EmptyProps> = (args) => <Empty {...args} />;

export const Default = Template.bind({});

Default.args = {
  children: <Button variant="primary">New project</Button>,
  icon: <ViewBoardsIcon className="w-9 text-gray-400" />,
  description: "You haven't created any projects yet",
  heading: "No projects",
};
