import { fireEvent, render, screen } from "@testing-library/react";

import { Checkbox } from "./Checkbox";

describe("Checkbox", () => {
    it("renders unchecked by default", () => {
        render(<Checkbox aria-label="Accept terms" />);

        expect(screen.getByRole("checkbox", { name: "Accept terms" })).not.toBeChecked();
    });

    it("supports disabled state", () => {
        render(<Checkbox aria-label="Accept terms" disabled />);

        expect(screen.getByRole("checkbox", { name: "Accept terms" })).toBeDisabled();
    });

    it("toggles when the label is clicked", () => {
        render(<Checkbox label="Accept terms" />);

        const checkbox = screen.getByRole("checkbox", { name: "Accept terms" });

        fireEvent.click(screen.getByText("Accept terms"));

        expect(checkbox).toBeChecked();
    });
});