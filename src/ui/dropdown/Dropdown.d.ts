import { ReactNode } from "react";
export type DropdownItem = {
    icon?: ReactNode;
    label: string;
    onClick?: () => void;
};
type Props = {
    children?: ReactNode;
    className?: string;
    iconButton?: ReactNode;
    iconButtonOpen?: ReactNode;
    items?: DropdownItem[];
};
export declare const Dropdown: ({ children, className, iconButton, iconButtonOpen, items, }: Props) => import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=Dropdown.d.ts.map