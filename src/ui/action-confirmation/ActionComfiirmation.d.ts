import { ReactNode } from "react";
type Props = {
    children?: ReactNode;
    classNameButtons?: string;
    classNameMessage?: string;
    isOpen: boolean;
    message: ReactNode | string;
    onConfirm: () => void;
    onReject: () => void;
    setIsOpen: (isOpen: boolean) => void;
    title: string;
};
export declare const ActionConfirmation: ({ children, classNameButtons, classNameMessage, isOpen, message, onConfirm, onReject, setIsOpen, title, }: Props) => import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=ActionComfiirmation.d.ts.map