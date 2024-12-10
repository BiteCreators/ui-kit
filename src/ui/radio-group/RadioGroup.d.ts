import React from "react";
type RadioOptions<T extends number | string> = {
    disabled?: boolean;
    label: string;
    name?: string;
    value: T;
};
export type RadioGroupProps<T extends number | string> = {
    defaultValue?: T;
    disabled?: boolean;
    error?: string;
    name?: string;
    onChange?: (value: T) => void;
    options: RadioOptions<T>[];
};
export declare const RadioGroup: <T extends number | string>(props: {
    ref?: React.Ref<HTMLInputElement>;
} & RadioGroupProps<T>) => JSX.Element;
export {};
//# sourceMappingURL=RadioGroup.d.ts.map