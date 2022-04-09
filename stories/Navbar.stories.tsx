import Navbar, { NavbarProps } from "../src/Navbar";
import { Meta, Story } from "@storybook/react";
import Avatar from "../src/Avatar/Avatar";
import Stack from "../src/Stack";
import Typography from "../src/Typography";
import Dropdown from "../src/Dropdown/Dropdown";
import { CogIcon, LogoutIcon, UserIcon } from "@heroicons/react/outline";

const meta: Meta = {
  title: "Navbar",
};

export default meta;

const Template: Story<NavbarProps> = (args) => (
  <div className="h-[94vh] bg-gray-100 border">
    <Navbar {...args} />
  </div>
);

export const Default = Template.bind({});

Default.args = {
  heading: "Projects",
  description: "Here you can view all your projects",
  extra: (
    <Dropdown
      align="right"
      trigger={
        <button>
          <Stack align="center" spacing="large">
            <Stack spacing="none" direction="vertical" align="end">
              <Typography.Heading level={5}>John Doe</Typography.Heading>
              <Typography.Paragraph className="!text-sm" dim>
                john.doe@email.com
              </Typography.Paragraph>
            </Stack>
            <Avatar src="https://i.pravatar.cc/300" />
          </Stack>
        </button>
      }
    >
      <Dropdown.Group>
        <Dropdown.ItemButton icon={<UserIcon className="w-5 h-5" />}>
          My profile
        </Dropdown.ItemButton>
        <Dropdown.ItemButton icon={<CogIcon className="w-5 h-5" />}>
          Settings
        </Dropdown.ItemButton>
      </Dropdown.Group>

      <Dropdown.Group>
        <Dropdown.ItemButton
          icon={<LogoutIcon className="w-5 h-5" />}
          variant="danger"
        >
          Log out
        </Dropdown.ItemButton>
      </Dropdown.Group>
    </Dropdown>
  ),
};
