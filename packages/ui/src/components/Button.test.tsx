import { render, screen } from "@testing-library/react";

import { Button } from "./Button";

describe("Button", () => {
    it("renders with the default primary variant", () => {
        render(<Button>Launch</Button>);

        const button = screen.getByRole("button", { name: "Launch" });

        expect(button).toHaveClass("bg-primary");
        expect(button).toHaveAttribute("type", "button");
    });

    it("supports explicit variants", () => {
        render(<Button variant="outline">Outline</Button>);

        expect(screen.getByRole("button", { name: "Outline" })).toHaveClass("border-border");
    });
});