import { ComponentPropsWithoutRef } from "react";
import { FieldValues } from "react-hook-form";
import { FormFieldProps } from "./types";
type Props<T extends FieldValues> = {
    inputType?: "default" | "reveal" | "search";
    label?: string;
} & ComponentPropsWithoutRef<"input"> & FormFieldProps<T>;
export declare const FormInput: <T extends FieldValues>({ control, defaultValue, error, inputType, label, name, rules, ...rest }: Props<T>) => import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=FormInput.d.ts.map