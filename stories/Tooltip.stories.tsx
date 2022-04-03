import Button from "../src/Button";
import Tooltip, { TooltipProps } from "../src/Tooltip";
import { Meta, Story } from "@storybook/react";
import { PlusIcon } from "@heroicons/react/solid";

const meta: Meta = {
  title: "Tooltip",
};

export default meta;

const Template: Story<TooltipProps> = (args) => <Tooltip {...args} />;

export const Default = Template.bind({});

Default.args = {
  children: (
    <Button size="small">
      <PlusIcon className="w-4" />
    </Button>
  ),
  title: "Create a new account",
};
