import { ReactNode } from "react";
type Props<T extends string> = {
    ariaLabel: string;
    className?: string;
    disabled?: boolean;
    listClassName?: string;
    onClick?: (value: T) => void;
    tabsData: TabsData<T>[];
    value: string;
};
type TabsData<T extends string> = {
    content: ReactNode;
    label: string;
    value: T;
};
export declare const TabsBase: <T extends string = string>({ ariaLabel, className, disabled, listClassName, onClick, tabsData, value, }: Props<T>) => import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=Tabs.d.ts.map