import Tabs, { TabsProps } from "../src/Tabs";
import { Meta, Story } from "@storybook/react";
import { useState } from "react";

const meta: Meta = {
  title: "Tabs",
};

export default meta;

const Template: Story<TabsProps> = (args) => {
  const [tab, setTab] = useState<string>("General");

  const TABS = ["General", "Logs", "Settings", "Members"];

  return (
    <Tabs {...args}>
      {TABS.map((TAB) => (
        <Tabs.Tab
          disabled={TAB === "Members"}
          active={TAB === tab}
          onClick={() => {
            setTab(TAB);
          }}
          key={TAB}
        >
          {TAB}
        </Tabs.Tab>
      ))}
    </Tabs>
  );
};

export const Default = Template.bind({});

Default.args = {};
