import Button from "../src/Button";
import Dropdown, { DropdownProps } from "../src/Dropdown/Dropdown";
import { Meta, Story } from "@storybook/react";
import {
  ArchiveIcon,
  ClipboardCopyIcon,
  ExternalLinkIcon,
  ShareIcon,
  TrashIcon,
} from "@heroicons/react/outline";

const meta: Meta = {
  title: "Dropdown",
};

export default meta;

const Template: Story<DropdownProps> = (args) => <Dropdown {...args} />;

export const Default = Template.bind({});

Default.args = {
  trigger: <Button>Open dropdown</Button>,
  children: (
    <>
      <Dropdown.Group>
        <Dropdown.ItemButton icon={<ShareIcon className="w-5 h-5" />}>
          Share
        </Dropdown.ItemButton>

        <Dropdown.ItemButton
          icon={<ClipboardCopyIcon className="w-5 h-5" />}
          disabled
        >
          Copy ID
        </Dropdown.ItemButton>
      </Dropdown.Group>

      <Dropdown.Group>
        <Dropdown.ItemLink
          variant="primary"
          href="https://google.com"
          icon={<ExternalLinkIcon className="w-5 h-5" />}
        >
          Exteral link
        </Dropdown.ItemLink>

        <Dropdown.ItemButton
          variant="warning"
          icon={<ArchiveIcon className="w-5 h-5" />}
        >
          Archive project
        </Dropdown.ItemButton>
      </Dropdown.Group>

      <Dropdown.Group>
        <Dropdown.ItemButton
          variant="danger"
          icon={<TrashIcon className="w-5 h-5" />}
        >
          Delete project
        </Dropdown.ItemButton>
      </Dropdown.Group>
    </>
  ),
  align: "left",
};
