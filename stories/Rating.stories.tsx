import Rating, { RatingProps } from "../src/Rating";
import { Meta, Story } from "@storybook/react";
import { useState } from "react";

const meta: Meta = {
  title: "Rating",
};

export default meta;

const Template: Story<RatingProps> = (args) => {
  const [rating, setRating] = useState<number>(0);

  return <Rating {...args} value={rating} onChangeValue={setRating} />;
};

export const Default = Template.bind({});

Default.args = {
  size: "default",
  value: 3,
};
