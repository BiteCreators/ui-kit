import React from "react";
import * as SelectPrimitive from "@radix-ui/react-select";
export type SelectProps = {
    className?: string;
    error?: string;
    icon?: React.ReactNode;
    id?: string;
    label?: string;
    maxWidth?: string;
    placeholder?: string;
    responsive?: boolean;
    width?: string;
} & SelectPrimitive.SelectProps;
export declare const Select: React.ForwardRefExoticComponent<{
    className?: string;
    error?: string;
    icon?: React.ReactNode;
    id?: string;
    label?: string;
    maxWidth?: string;
    placeholder?: string;
    responsive?: boolean;
    width?: string;
} & SelectPrimitive.SelectProps & React.RefAttributes<HTMLButtonElement>>;
export declare const SelectItem: React.ForwardRefExoticComponent<SelectPrimitive.SelectItemProps & React.RefAttributes<HTMLDivElement>>;
//# sourceMappingURL=Select.d.ts.map