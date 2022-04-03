import Button from "../src/Button";
import Input from "../src/Input";
import Popover, { PopoverProps } from "../src/Popover";
import Stack from "../src/Stack";
import { Meta, Story } from "@storybook/react";
import { OfficeBuildingIcon, PlusIcon } from "@heroicons/react/solid";

const meta: Meta = {
  title: "Popover",
};

export default meta;

const Template: Story<PopoverProps> = (args) => (
  <Popover className="w-72" {...args}></Popover>
);

export const Default = Template.bind({});

Default.args = {
  children: (
    <Button size="small" icon={<PlusIcon className="w-4" />}>
      Create company
    </Button>
  ),
  align: "start",
  content: (
    <Stack direction="vertical" spacing="large">
      <Input
        placeholder="Acme INC"
        label="Company name"
        id="name"
        required
        block
      />
      <Button
        size="small"
        variant="primary"
        icon={<OfficeBuildingIcon className="w-3" />}
      >
        Create company
      </Button>
    </Stack>
  ),
};
