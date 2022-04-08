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
import {
  OfficeBuildingIcon as OfficeBuildingIconSolid,
  ViewGridIcon as ViewGridIconSolid,
  HomeIcon as HomeIconSolid,
  CogIcon as CogIconSolid,
} from "@heroicons/react/solid";
import { useState } from "react";

const meta: Meta = {
  title: "Sidebar",
};

export default meta;

const SIDEBAR_ITEMS = [
  {
    label: "Start",
    items: [
      {
        activeIcon: HomeIconSolid,
        icon: HomeIcon,
        label: "Home",
      },
      {
        activeIcon: ViewGridIconSolid,
        icon: ViewGridIcon,
        label: "Projects",
      },
    ],
  },
  {
    label: "Management",
    items: [
      {
        activeIcon: CogIconSolid,
        icon: CogIcon,
        label: "Settings",
      },
      {
        activeIcon: OfficeBuildingIconSolid,
        icon: OfficeBuildingIcon,
        label: "Organization",
      },
    ],
  },
];

const Template: Story<SidebarProps> = (args) => {
  const [item, setItem] = useState<string>("Home");

  return (
    <div className="flex h-[94vh] bg-gray-100 border">
      <Sidebar {...args}>
        {SIDEBAR_ITEMS.map((items) => (
          <Sidebar.Group heading={items.label} key={items.label}>
            {items.items.map((ITEM) => (
              <Sidebar.ItemButton
                onClick={() => {
                  setItem(ITEM.label);
                }}
                activeIcon={<ITEM.activeIcon className="w-5 text-gray-500" />}
                icon={<ITEM.icon className="w-5 text-gray-500" />}
                active={ITEM.label === item}
                key={ITEM.label}
              >
                {ITEM.label}
              </Sidebar.ItemButton>
            ))}
          </Sidebar.Group>
        ))}
      </Sidebar>
    </div>
  );
};

export const Default = Template.bind({});

Default.args = {
  header: (
    <Stack direction="vertical" spacing="large">
      <h1 className="text-2xl font-medium tracking-wide">Acme INC</h1>
      <Input placeholder="Search" className="bg-gray-50" block />
    </Stack>
  ),
  footer: (
    <Sidebar.Group>
      <Sidebar.ItemButton icon={<LogoutIcon className="w-5 text-gray-500" />}>
        Log out
      </Sidebar.ItemButton>
      <Sidebar.ItemButton icon={<SupportIcon className="w-5 text-gray-500" />}>
        Help
      </Sidebar.ItemButton>
    </Sidebar.Group>
  ),
};
