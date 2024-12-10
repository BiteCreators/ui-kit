import { ReactNode } from "react";
type Props = {
    alertContent?: ReactNode;
    canClose?: boolean;
    className?: string;
    duration?: number;
    message?: string;
    onClose?: () => void;
    open?: boolean;
    portal?: boolean;
    purpose?: "alert" | "toast";
    type: "error" | "info" | "modal" | "success";
};
export declare const Alert: ({ alertContent, canClose, className, duration, message, onClose, open, portal, purpose, type, }: Props) => import("react/jsx-runtime").JSX.Element | null;
export {};
//# sourceMappingURL=Alert.d.ts.map