import { cva, type VariantProps } from "class-variance-authority";
import type { InputHTMLAttributes } from "react";

import { cn } from "../lib/cn";

export const inputVariants = cva(
    "flex h-10 w-full rounded-md border border-input bg-white px-3 py-2 text-sm text-foreground shadow-sm transition-colors duration-200 placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 aria-[invalid=true]:border-red-500 aria-[invalid=true]:focus-visible:ring-red-500/20",
    {
        variants: {
            invalid: {
                true: "aria-[invalid=true]:border-red-500",
                false: ""
            }
        },
        defaultVariants: {
            invalid: false
        }
    }
);

export interface InputProps
    extends InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof inputVariants> { }

export function Input({ className, invalid, type = "text", ...props }: InputProps) {
    return <input aria-invalid={invalid || undefined} className={cn(inputVariants({ invalid }), className)} type={type} {...props} />;
}