import DatePicker, { DatePickerProps } from "../src/DatePicker";
import { Meta, Story } from "@storybook/react";
import { useState } from "react";

const meta: Meta = {
  title: "DatePicker",
};

export default meta;

const Template: Story<DatePickerProps> = (args) => {
  const [date, setDate] = useState(new Date());

  return <DatePicker {...args} date={date} onChangeDate={setDate} />;
};

export const Default = Template.bind({});

Default.args = {
  showTodayButton: true,
};
