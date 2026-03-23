import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "@repo/ui";

const meta = {
    title: "Components/Button",
    component: Button,
    args: {
        children: "Ship component"
    },
    argTypes: {
        variant: {
            control: "inline-radio",
            options: ["primary", "secondary", "outline"]
        }
    }
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        variant: "primary"
    }
};

export const Secondary: Story = {
    args: {
        variant: "secondary"
    }
};

export const Outline: Story = {
    args: {
        variant: "outline"
    }
};