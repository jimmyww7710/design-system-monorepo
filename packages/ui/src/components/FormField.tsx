import { cloneElement, isValidElement, useId, type ReactElement, type ReactNode } from "react";

import { cn } from "../lib/cn";

export interface FormFieldProps {
    children: ReactElement<{
        "aria-describedby"?: string;
        "aria-invalid"?: boolean;
        id?: string;
    }>;
    className?: string;
    error?: ReactNode;
    helperText?: ReactNode;
    label: ReactNode;
    required?: boolean;
}

export function FormField({ children, className, error, helperText, label, required = false }: FormFieldProps) {
    const generatedId = useId();

    if (!isValidElement(children)) {
        return null;
    }

    const childProps = children.props ?? {};

    const controlId = childProps.id ?? generatedId;
    const helperId = helperText ? `${controlId}-helper` : undefined;
    const errorId = error ? `${controlId}-error` : undefined;
    const describedBy = [childProps["aria-describedby"], helperId, errorId].filter(Boolean).join(" ") || undefined;
    const invalid = Boolean(error || childProps["aria-invalid"]);

    const control = cloneElement(children, {
        "aria-describedby": describedBy,
        "aria-invalid": invalid || undefined,
        id: controlId,
    });

    return (
        <div className={cn("grid gap-2", className)}>
            <label className="text-sm font-medium leading-none text-foreground" htmlFor={controlId}>
                <span>{label}</span>
                {required ? (
                    <>
                        <span aria-hidden="true" className="ml-1 text-red-500">*</span>
                        <span className="sr-only"> required</span>
                    </>
                ) : null}
            </label>
            {control}
            {helperText ? <p className="text-sm text-muted-foreground" id={helperId}>{helperText}</p> : null}
            {error ? <p aria-live="polite" className="text-sm font-medium text-red-600" id={errorId} role="alert">{error}</p> : null}
        </div>
    );
}