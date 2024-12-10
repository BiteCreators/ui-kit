import React from "react";
import { FieldValues } from "react-hook-form";
import { FormFieldProps } from "./types";
type Props<T extends FieldValues> = {
    className?: string;
    disabled?: boolean;
    error?: React.ReactNode;
    inputClassName?: string;
    label?: string;
    mode: "range" | "single";
    placeholder?: string;
    required?: boolean;
} & FormFieldProps<T>;
export declare const FormDatePicker: <T extends FieldValues>({ control, error, name, ...props }: Props<T>) => import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=FormDatePicker.d.ts.map