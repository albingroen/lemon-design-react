import Button from "../src/Button";
import Modal, { ModalProps } from "../src/Modal";
import { Meta, Story } from "@storybook/react";
import { useState } from "react";
import { TrashIcon } from "@heroicons/react/outline";

const meta: Meta = {
  title: "Modal",
};

export default meta;

const Template: Story<ModalProps> = (args) => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <>
      <Button
        onClick={() => {
          setOpen(true);
        }}
      >
        Open modal
      </Button>

      {open && (
        <Modal
          onClose={() => {
            setOpen(false);
          }}
          {...args}
        />
      )}
    </>
  );
};

export const Default = Template.bind({});

Default.args = {
  description: "Are you sure you want to delete this project?",
  children: ({ onClose }) => (
    <Button
      icon={<TrashIcon className="w-4" />}
      onClick={onClose}
      variant="danger"
      block
    >
      Yes, delete
    </Button>
  ),
  heading: "Delete project",
};
