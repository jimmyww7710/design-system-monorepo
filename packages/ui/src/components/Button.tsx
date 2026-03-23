import { cva, type VariantProps } from "class-variance-authority";
import type { ButtonHTMLAttributes } from "react";

import { cn } from "../lib/cn";

export const buttonVariants = cva(
    "inline-flex items-center justify-center rounded-md border border-transparent px-4 py-2 text-sm font-semibold transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
    {
        variants: {
            variant: {
                primary: "bg-primary text-primary-foreground shadow-sm hover:brightness-110",
                secondary: "bg-secondary text-secondary-foreground hover:bg-white",
                outline: "border-border bg-transparent text-foreground hover:bg-muted"
            }
        },
        defaultVariants: {
            variant: "primary"
        }
    }
);

export interface ButtonProps
    extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> { }

export function Button({ className, variant, type = "button", ...props }: ButtonProps) {
    return <button className={cn(buttonVariants({ variant }), className)} type={type} {...props} />;
}