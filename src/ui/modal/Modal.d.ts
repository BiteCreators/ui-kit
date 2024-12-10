import { ReactNode } from "react";
type Props = {
    children: ReactNode;
    className?: string;
    disabledButton?: boolean;
    handleBack?: () => void;
    handleInteractOutside?: (e: any) => void;
    handleNext?: () => void;
    isOpen: boolean;
    maxWidth?: string;
    mode: "custom" | "default" | "outside" | "withStep";
    nextButtonTitle?: string;
    onOpenChange?: (open: boolean) => void;
    title?: ReactNode | string;
};
export declare const Modal: ({ children, className, disabledButton, handleBack, handleInteractOutside, handleNext, isOpen, maxWidth, mode, nextButtonTitle, onOpenChange, title, }: Props) => import("react").ReactPortal | null;
export {};
//# sourceMappingURL=Modal.d.ts.map