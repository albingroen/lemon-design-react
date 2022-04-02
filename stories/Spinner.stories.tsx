import Spinner, { SpinnerProps } from "../src/Spinner";
import { Meta, Story } from "@storybook/react";

const meta: Meta = {
  title: "Spinner",
  component: Spinner,
};

export default meta;

const Template: Story<SpinnerProps> = (args) => <Spinner {...args} />;

export const Default = Template.bind({});

Default.args = { size: "default" };
