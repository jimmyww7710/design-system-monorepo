import type { Meta, StoryObj } from "@storybook/react";

import { FormField, Input, type FormFieldProps } from "@repo/ui";

type FormFieldStoryProps = Omit<FormFieldProps, "children">;

function FormFieldStory(args: FormFieldStoryProps) {
    return (
        <FormField {...args}>
            <Input placeholder="name@example.com" />
        </FormField>
    );
}

const meta = {
    title: "Components/FormField",
    component: FormFieldStory,
} satisfies Meta<typeof FormFieldStory>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        label: "Email address"
    }
};

export const WithHelperText: Story = {
    args: {
        helperText: "We will only use this for account notifications.",
        label: "Email address"
    }
};

export const WithError: Story = {
    args: {
        error: "Please provide a valid email address.",
        label: "Email address"
    }
};

export const Required: Story = {
    args: {
        label: "Email address",
        required: true
    }
};