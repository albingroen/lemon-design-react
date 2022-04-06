import Divider, { DividerProps } from "../src/Divider";
import Stack from "../src/Stack";
import Typography from "../src/Typography";
import { Meta, Story } from "@storybook/react";

const meta: Meta = {
  title: "Divider",
};

export default meta;

const Template: Story<DividerProps> = (args) => (
  <Stack direction="vertical">
    <Typography.Paragraph>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, iure
      rerum? Amet voluptates suscipit quas ratione facilis adipisci tempore
      maiores assumenda dignissimos! Odio reprehenderit ut eius laborum? Maxime
      beatae possimus commodi deleniti quam reprehenderit veniam soluta
      perspiciatis recusandae iure cum expedita modi molestias ipsa enim,
      consequatur mollitia natus deserunt tempore.
    </Typography.Paragraph>
    <Divider {...args} />
    <Typography.Paragraph>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, iure
      rerum? Amet voluptates suscipit quas ratione facilis adipisci tempore
      maiores assumenda dignissimos! Odio reprehenderit ut eius laborum? Maxime
      beatae possimus commodi deleniti quam reprehenderit veniam soluta
      perspiciatis recusandae iure cum expedita modi molestias ipsa enim,
      consequatur mollitia natus deserunt tempore.
    </Typography.Paragraph>
  </Stack>
);

export const Default = Template.bind({});

Default.args = {};
