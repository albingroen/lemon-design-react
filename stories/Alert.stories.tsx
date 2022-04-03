import Alert, { AlertProps } from "../src/Alert";
import { Meta, Story } from "@storybook/react";

const meta: Meta = {
  title: "Alert",
};

export default meta;

const Template: Story<AlertProps> = (args) => <Alert {...args} />;

export const Default = Template.bind({});

Default.args = {
  heading: "Maintainance coming up",
  description:
    "A maintainance of the platform is coming up at July 22nd 3.00 AM. The site will be down roughly 30 minutes.",
  variant: "info",
  onClose: () => undefined,
};
