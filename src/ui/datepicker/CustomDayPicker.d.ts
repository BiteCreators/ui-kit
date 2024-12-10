import { DateRange, DayPickerProps } from "react-day-picker";
type Props = {
    classNames?: any;
    mode: "range" | "single";
    month?: Date;
    onMonthChange?: (month: Date) => void;
    onSelect: (selected: Date | DateRange | undefined) => void;
    selected: Date | DateRange | null | undefined;
} & Omit<DayPickerProps, "mode" | "onSelect" | "selected">;
export declare const CustomDayPicker: ({ classNames, mode, month, onMonthChange, onSelect, selected, ...props }: Props) => import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=CustomDayPicker.d.ts.map