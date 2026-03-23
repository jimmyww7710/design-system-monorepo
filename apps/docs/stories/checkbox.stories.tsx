import type { Meta, StoryObj } from "@storybook/react";

import { Checkbox } from "@repo/ui";

const meta = {
    title: "Components/Checkbox",
    component: Checkbox,
    args: {
        label: "I agree to the privacy policy"
    }
} satisfies Meta<typeof Checkbox>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Checked: Story = {
    args: {
        defaultChecked: true
    }
};

export const Disabled: Story = {
    args: {
        disabled: true
    }
};

export const WithLongLabel: Story = {
    args: {
        label: "I agree to receive important updates about my account settings and security notifications."
    }
};