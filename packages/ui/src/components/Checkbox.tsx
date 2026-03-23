import { useId, type InputHTMLAttributes, type ReactNode } from "react";

import { cn } from "../lib/cn";

export interface CheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "type"> {
    label?: ReactNode;
}

export function Checkbox({ className, id, label, ...props }: CheckboxProps) {
    const generatedId = useId();
    const controlId = id ?? generatedId;

    const checkbox = (
        <input
            className={cn(
                "h-4 w-4 rounded border border-input text-primary shadow-sm transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
                className
            )}
            id={controlId}
            type="checkbox"
            {...props}
        />
    );

    if (!label) {
        return checkbox;
    }

    return (
        <label className="flex items-start gap-3 text-sm font-medium text-foreground" htmlFor={controlId}>
            {checkbox}
            <span className="leading-5">{label}</span>
        </label>
    );
}