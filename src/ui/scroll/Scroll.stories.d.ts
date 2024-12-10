import { StoryObj } from "@storybook/react";
declare const meta: {
    component: import("react").ForwardRefExoticComponent<{
        orientation?: "horizontal" | "vertical";
        scrollbarClassName?: string;
    } & Omit<import("@radix-ui/react-scroll-area").ScrollAreaProps & import("react").RefAttributes<HTMLDivElement>, "ref"> & import("react").RefAttributes<HTMLDivElement>>;
};
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
export declare const Horizontal: Story;
export default meta;
//# sourceMappingURL=Scroll.stories.d.ts.map