type usePaginationParams = {
    currentPage: number;
    onClick: (page: number) => void;
    pagesCount: number;
    siblings?: number;
};
export declare const usePagination: ({ currentPage, onClick, pagesCount, siblings, }: usePaginationParams) => {
    isFirstPage: boolean;
    isLastPage: boolean;
    onClickMainPaginationButton: (page: number) => () => void;
    onClickNextPageButton: () => void;
    onClickPreviousPageButton: () => void;
    paginationRange: (string | number)[];
};
export {};
//# sourceMappingURL=usePagination.d.ts.map