import { render, screen } from "@testing-library/react";

import { FormField } from "./FormField";
import { Input } from "./Input";

describe("FormField", () => {
    it("associates the label with the control", () => {
        render(
            <FormField label="Email address">
                <Input />
            </FormField>
        );

        expect(screen.getByLabelText("Email address")).toHaveAttribute("type", "text");
    });

    it("renders helper and error text and wires aria-describedby", () => {
        render(
            <FormField error="Email is required" helperText="We will never share your email" label="Email address">
                <Input />
            </FormField>
        );

        const input = screen.getByLabelText("Email address");

        expect(screen.getByText("We will never share your email")).toBeInTheDocument();
        expect(screen.getByText("Email is required")).toBeInTheDocument();
        expect(input).toHaveAttribute("aria-describedby");
        expect(input.getAttribute("aria-describedby")).toContain("helper");
        expect(input.getAttribute("aria-describedby")).toContain("error");
    });
});