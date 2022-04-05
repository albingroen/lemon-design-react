import Menu, { MenuProps } from "../src/Menu";
import { Meta, Story } from "@storybook/react";
import { useState } from "react";

const meta: Meta = {
  title: "Menu",
};

export default meta;

const Template: Story<MenuProps> = (args) => {
  const [item, setItem] = useState<string>("general");

  return (
    <div className="h-screen bg-gray-100 p-5">
      <Menu {...args}>
        <button
          onClick={() => {
            setItem("general");
          }}
          className="block w-full text-left"
        >
          <Menu.Item active={item === "general"}>General</Menu.Item>
        </button>

        <button
          onClick={() => {
            setItem("advanced");
          }}
          className="block w-full text-left"
        >
          <Menu.Item active={item === "advanced"}>Advanced</Menu.Item>
        </button>

        <a
          href="https://google.com"
          rel="noopener noreferrer"
          className="block"
          target="_blank"
        >
          <Menu.Item>External link</Menu.Item>
        </a>
      </Menu>
    </div>
  );
};

export const Default = Template.bind({});

Default.args = {
  className: "w-48",
};
