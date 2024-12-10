import React from "react";
export type TableHeader = {
    name: string;
    onClickSortButton?: () => void;
    sort?: "asc" | "desc" | null;
};
export type TableData = {
    [key: number]: React.ReactNode | number | string;
};
type Props = {
    classNameHeadersItem?: string;
    classNameTableCell?: string;
    headers: TableHeader[];
    tableData: [] | TableData[];
};
export declare const Table: (props: Props) => import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=Table.d.ts.map