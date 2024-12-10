import { ComponentProps } from "react";
type Props = {
    asChild?: boolean;
    variant?: "icon" | "outline" | "primary" | "secondary" | "text";
} & ComponentProps<"button">;
export declare const Button: ({ asChild, className, variant, ...props }: Props) => import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=Button.d.ts.map