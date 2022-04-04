import Button from "../src/Button";
import Table, { TableProps } from "../src/Table";
import Typography from "../src/Typography";
import { ExternalLinkIcon } from "@heroicons/react/solid";
import { Meta, Story } from "@storybook/react";

const meta: Meta = {
  title: "Table",
};

export default meta;

const Template: Story<TableProps> = (args) => (
  <div className="h-screen bg-gray-100 p-5">
    <Table {...args} />
  </div>
);

export const Default = Template.bind({});

Default.args = {
  columns: [
    {
      heading: "Name",
      dataIndex: "name",
    },
    {
      heading: "Email",
      dataIndex: "email",
    },
    {
      heading: "Location",
      dataIndex: "location",
    },
    {
      heading: "Last logged in",
      dataIndex: "loggedInAt",
      renderItem: (row: { loggedInAt: string }) => (
        <Typography.Paragraph dim>{row.loggedInAt}</Typography.Paragraph>
      ),
    },
    {
      renderItem: () => (
        <Button icon={<ExternalLinkIcon className="w-3" />} size="small">
          View
        </Button>
      ),
    },
  ],
  rows: [
    {
      email: "john.doe@email.com",
      location: "New York City",
      loggedInAt: "2022-04-03",
      name: "John Doe",
    },
    {
      email: "johanna.doe@email.com",
      location: "San Fransisco",
      loggedInAt: "2022-04-04",
      name: "Johanna Doe",
    },
  ],
};
