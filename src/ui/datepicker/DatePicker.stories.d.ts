import { DateRange } from "react-day-picker";
import { StoryObj } from "@storybook/react";
declare const meta: {
    component: import("react").ForwardRefExoticComponent<{
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
    } & import("react").RefAttributes<HTMLInputElement>>;
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const SingleDatePicker: Story;
export declare const DisabledDatePicker: Story;
export declare const ErrorDatePicker: Story;
export declare const RangeDatePicker: Story;
//# sourceMappingURL=DatePicker.stories.d.ts.map