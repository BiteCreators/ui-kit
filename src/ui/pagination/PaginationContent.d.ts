import React from "react";
import * as SelectPrimitive from "@radix-ui/react-select";
type MainPaginationButtonsProps = {
    currentPage: number;
    onClick: (pageNumber: number) => () => void;
    paginationRange: (number | string)[];
};
export declare const MainPaginationButtons: ({ currentPage, onClick, paginationRange, }: MainPaginationButtonsProps) => import("react/jsx-runtime").JSX.Element;
type PaginationButtonProps = {
    isSelected?: boolean;
    onClick: () => void;
    page: number;
} & React.ComponentProps<"button">;
export declare const PaginationButton: ({ className, isSelected, onClick, page, }: PaginationButtonProps) => import("react/jsx-runtime").JSX.Element;
export declare const PaginationEllipsis: ({ className, ...props }: React.ComponentProps<"span">) => import("react/jsx-runtime").JSX.Element;
export declare const SelectPagesPortion: React.ForwardRefExoticComponent<{
    className?: string;
} & SelectPrimitive.SelectProps & React.RefAttributes<HTMLButtonElement>>;
export declare const SelectPortion: React.ForwardRefExoticComponent<SelectPrimitive.SelectItemProps & React.RefAttributes<HTMLDivElement>>;
export {};
//# sourceMappingURL=PaginationContent.d.ts.map