import { Button, Card, CardProps, Typography } from "../src";
import { ExternalLinkIcon, EyeOffIcon } from "@heroicons/react/solid";
import { Meta, Story } from "@storybook/react";

const meta: Meta = {
  title: "Card",
  component: Card,
};

export default meta;

const Template: Story<CardProps> = (args) => (
  <div className="h-screen bg-gray-100 p-5">
    <Card {...args} />
  </div>
);

export const Default = Template.bind({});

Default.args = {
  children: (
    <Card.Content>
      <Typography.Paragraph dim>
        You now have to chance to upgrade to the business plan for only
        $12.99/month
      </Typography.Paragraph>

      <Button
        icon={<ExternalLinkIcon className="w-4" />}
        variant="success"
        className="mt-4"
      >
        Upgrade now
      </Button>
    </Card.Content>
  ),
  heading: "Upgrade your plan",
  extra: (
    <Button icon={<EyeOffIcon className="w-3" />} size="small">
      Don&apos;t show again
    </Button>
  ),
};
