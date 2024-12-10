import React, { ComponentProps } from "react";
export type TextAreaProps = {
    className?: string;
    error?: string;
    isCorrect?: boolean;
    isError?: boolean;
    label?: string;
    limitCount?: number;
    resize?: "auto" | "manual-x" | "manual-y";
} & ComponentProps<"textarea">;
export declare const TextArea: React.ForwardRefExoticComponent<Omit<TextAreaProps, "ref"> & React.RefAttributes<HTMLTextAreaElement>>;
//# sourceMappingURL=TextArea.d.ts.map