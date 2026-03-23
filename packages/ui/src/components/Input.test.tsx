import { render, screen } from "@testing-library/react";

import { Input } from "./Input";

describe("Input", () => {
    it("renders with the default text type", () => {
        render(<Input aria-label="Email" />);

        const input = screen.getByRole("textbox", { name: "Email" });

        expect(input).toHaveAttribute("type", "text");
    });

    it("supports disabled state", () => {
        render(<Input aria-label="Email" disabled />);

        expect(screen.getByRole("textbox", { name: "Email" })).toBeDisabled();
    });

    it("merges className", () => {
        render(<Input aria-label="Email" className="custom-class" />);

        expect(screen.getByRole("textbox", { name: "Email" })).toHaveClass("custom-class");
    });
});