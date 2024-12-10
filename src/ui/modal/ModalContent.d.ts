import { ReactNode } from "react";
type Props = {
    children?: ReactNode;
    disabledButton?: boolean;
    handleBack?: () => void;
    handleNext?: () => void;
    mode: "custom" | "default" | "outside" | "withStep";
    nextButtonTitle?: string;
    title?: ReactNode | string;
};
export declare const ModalContent: ({ children, disabledButton, handleBack, handleNext, mode, nextButtonTitle, title, }: Props) => import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=ModalContent.d.ts.map