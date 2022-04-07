import Sidebar, { SidebarProps } from "../src/Sidebar/Sidebar";
import Stack from "../src/Stack";
import Input from "../src/Input";
import { Meta, Story } from "@storybook/react";
import {
  CogIcon,
  HomeIcon,
  LogoutIcon,
  OfficeBuildingIcon,
  SupportIcon,
  ViewGridIcon,
} from "@heroicons/react/outline";

const meta: Meta = {
  title: "Sidebar",
};

export default meta;

const Template: Story<SidebarProps> = (args) => (
  <div className="flex h-[94vh] bg-gray-100 border">
    <Sidebar {...args} />
  </div>
);

export const Default = Template.bind({});

Default.args = {
  header: (
    <Stack direction="vertical" spacing="large">
      <h1 className="text-2xl font-medium tracking-wide">Acme INC</h1>
      <Input placeholder="Search" className="bg-gray-50" block />
    </Stack>
  ),
  children: (
    <>
      <Sidebar.Group heading="Start">
        <Sidebar.ItemLink icon={<HomeIcon className="w-5 h-5 text-gray-500" />}>
          Home
        </Sidebar.ItemLink>
        <Sidebar.ItemLink
          icon={<ViewGridIcon className="w-5 h-5 text-gray-500" />}
        >
          Projects
        </Sidebar.ItemLink>
      </Sidebar.Group>

      <Sidebar.Group heading="Management">
        <Sidebar.ItemLink icon={<CogIcon className="w-5 h-5 text-gray-500" />}>
          Settings
        </Sidebar.ItemLink>
        <Sidebar.ItemLink
          icon={<OfficeBuildingIcon className="w-5 h-5 text-gray-500" />}
        >
          Organization
        </Sidebar.ItemLink>
      </Sidebar.Group>
    </>
  ),
  footer: (
    <Sidebar.Group>
      <Sidebar.ItemButton
        icon={<LogoutIcon className="w-5 h-5 text-gray-500" />}
      >
        Log out
      </Sidebar.ItemButton>
      <Sidebar.ItemButton
        icon={<SupportIcon className="w-5 h-5 text-gray-500" />}
      >
        Help
      </Sidebar.ItemButton>
    </Sidebar.Group>
  ),
};
