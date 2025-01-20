import React from "react";

import {TableHeaders} from "./TableHeaders";
import {TableRows} from "./TableRows";
import Skeleton, {SkeletonTheme} from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export type TableHeader = {
    name: string;
    sort?: React.ReactNode;
};
export type TableData = {
    [key: number]: React.ReactNode | number | string;
};
type Props = {
    classNameHeadersItem?: string;
    classNameTableCell?: string;
    headers: TableHeader[];
    tableData: [] | TableData[];
    loading?: boolean;
};
export const Table = ({
                          classNameHeadersItem,
                          classNameTableCell,
                          headers,
                          tableData,
                          loading = false,
                      }: Props) => {
    return (
        <SkeletonTheme baseColor={'#202020'} highlightColor={'#444'}>
            <div className={"relative mb-12 sm:flex sm:flex-col"}>
                <section
                    className={
                        "w-full h-full block text-sm text-light-100 sm:table sm:table-auto sm:border-l sm:border-r sm:border-dark-500"
                    }
                >
                    <header className={"hidden sm:table-header-group sm:w-full"}>
                        <ul className={"table-row bg-dark-500 text-left font-semibold h-12"}>
                            {loading ? (
                                headers.map((_, index) => (
                                    <li key={index} className="pl-6 pt-2 pr-16 table-cell">
                                        <Skeleton height={20}/>
                                    </li>
                                ))
                            ) : (
                                <TableHeaders
                                    className={classNameHeadersItem}
                                    headers={headers}
                                />
                            )}
                        </ul>
                    </header>
                    <div className={"flex flex-col gap-y-3 sm:table-row-group sm:w-full"}>
                        {loading ? (
                            Array(5)
                                .fill(null)
                                .map((_, index) => (
                                    <ul
                                        key={index}
                                        className={
                                            "min-h-[200px] font-normal flex flex-col py-5 px-[10px] gap-y-3 bg-dark-500 border border-dark-300 rounded-sm sm:table-row sm:h-12 sm:bg-inherit"
                                        }
                                    >
                                        {headers.map((_, index) => (
                                            <li
                                                key={index}
                                                className="flex justify-between sm:table-cell sm:pr-3 sm:pl-3 sm:border-b sm:border-dark-500 sm:align-middle"
                                            >
                                                <Skeleton height={20} width={"80%"}/>
                                            </li>
                                        ))}
                                    </ul>
                                ))
                        ) : (
                            <TableRows
                                className={classNameTableCell}
                                tableData={tableData}
                            />
                        )}
                    </div>
                </section>
            </div>
        </SkeletonTheme>
    );
};
