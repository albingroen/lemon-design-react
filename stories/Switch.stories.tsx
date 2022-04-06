import Switch, { SwitchProps } from "../src/Switch";
import { Meta, Story } from "@storybook/react";
import { useState } from "react";

const meta: Meta = {
  title: "Switch",
};

export default meta;

const Template: Story<SwitchProps> = (args) => {
  const [checked, setChecked] = useState<boolean>(false);

  return <Switch {...args} checked={checked} onChange={setChecked} />;
};

export const Default = Template.bind({});

Default.args = {};
