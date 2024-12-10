import React, { ComponentProps } from "react";
import { FieldValues } from "react-hook-form";
import { FormFieldProps } from "./types";
type Props<T extends FieldValues> = {
    error?: string;
    text?: React.ReactNode;
} & ComponentProps<"input"> & FormFieldProps<T>;
export declare const FormCheckbox: <T extends FieldValues>({ control, defaultValue, error, name, rules, text, ...props }: Props<T>) => import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=FormCheckbox.d.ts.map