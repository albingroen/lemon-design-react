import Grid, { GridProps } from "../src/Grid";
import { Meta, Story } from "@storybook/react";
import { Card } from "../src/Card";

const meta: Meta = {
  title: "Grid",
};

export default meta;

const Template: Story<GridProps> = (args) => (
  <div className="h-[94vh] bg-gray-100 p-5">
    <Grid {...args} />
  </div>
);

export const Default = Template.bind({});

Default.args = {
  className: "grid-cols-3 gap-6",
  children: (
    <>
      <Card>
        <Card.Content />
      </Card>

      <Card>
        <Card.Content />
      </Card>

      <Card>
        <Card.Content />
      </Card>

      <Card>
        <Card.Content />
      </Card>

      <Card>
        <Card.Content />
      </Card>

      <Card>
        <Card.Content />
      </Card>
    </>
  ),
};
