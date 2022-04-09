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
  <Popover panelClassName="w-80" {...args} />
);

export const Default = Template.bind({});

Default.args = {
  align: "start",
  children: <Button icon={<PlusIcon className="w-4" />}>Create company</Button>,
  content: ({ onClose }) => {
    return (
      <Stack direction="vertical" spacing="large">
        <Input
          placeholder="Acme INC"
          label="Company name"
          autoFocus
          id="name"
          required
          block
        />
        <Button
          size="small"
          variant="primary"
          icon={<OfficeBuildingIcon className="w-3" />}
          onClick={onClose}
        >
          Create company
        </Button>
      </Stack>
    );
  },
};
