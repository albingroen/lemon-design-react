import Slider, { SliderProps } from "../src/Slider";
import { Meta, Story } from "@storybook/react";

const meta: Meta = {
  title: "Slider",
};

export default meta;

const Template: Story<SliderProps> = (args) => <Slider {...args} />;

export const Default = Template.bind({});

Default.args = {
  min: 0,
  max: 10,
  defaultValue: 2,
  labels: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
};
