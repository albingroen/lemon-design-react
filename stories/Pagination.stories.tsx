import Pagination, { PaginationProps } from "../src/Pagination";
import { Meta, Story } from "@storybook/react";
import { useState } from "react";

const meta: Meta = {
  title: "Pagination",
};

export default meta;

const Template: Story<PaginationProps> = (args) => {
  const [page, setPage] = useState<number>(1);

  return <Pagination {...args} page={page} onChange={setPage} />;
};

export const Default = Template.bind({});

Default.args = {
  pages: 20,
  limit: 5,
};
