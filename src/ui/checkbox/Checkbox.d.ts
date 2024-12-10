import React, { ComponentProps, ReactNode } from "react";
type CheckboxProps = {
    error?: string;
    onChecked?: (value: boolean) => void;
    text?: ReactNode;
} & ComponentProps<"input">;
export declare const Checkbox: React.ForwardRefExoticComponent<Omit<CheckboxProps, "ref"> & React.RefAttributes<HTMLInputElement>>;
export {};
//# sourceMappingURL=Checkbox.d.ts.map