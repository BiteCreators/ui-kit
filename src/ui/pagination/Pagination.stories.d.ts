import { StoryObj } from "@storybook/react";
import { Pagination } from "./Pagination";
declare const meta: {
    component: ({ className, currentPage, onChangePagesPortion, onClickPaginationButton, pagesCount, pagesPortion, siblings, }: {
        className?: string;
        currentPage: number;
        onChangePagesPortion: (pagesPortion: string) => void;
        onClickPaginationButton: (page: number) => void;
        pagesCount: number;
        pagesPortion?: string;
        siblings?: number;
    }) => import("react/jsx-runtime").JSX.Element;
};
type Story = StoryObj<typeof Pagination>;
export declare const Default: Story;
export default meta;
//# sourceMappingURL=Pagination.stories.d.ts.map