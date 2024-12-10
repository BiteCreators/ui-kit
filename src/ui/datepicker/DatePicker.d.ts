import React from "react";
import { DateRange } from "react-day-picker";
type Props = {
    className?: string;
    disabled?: boolean;
    error?: React.ReactNode | string;
    inputClassName?: string;
    label?: string;
    mode: "range" | "single";
    onDateChange?: (date: Date | DateRange | undefined) => void;
    placeholder?: string;
    required?: boolean;
    selectedDate: Date | null;
};
export declare const DatePicker: React.ForwardRefExoticComponent<Props & React.RefAttributes<HTMLInputElement>>;
export {};
//# sourceMappingURL=DatePicker.d.ts.map