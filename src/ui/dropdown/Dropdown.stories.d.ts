import { StoryObj } from "@storybook/react";
declare const meta: {
    component: ({ children, className, iconButton, iconButtonOpen, items, }: {
        children?: import("react").ReactNode;
        className?: string;
        iconButton?: import("react").ReactNode;
        iconButtonOpen?: import("react").ReactNode;
        items?: import("./Dropdown").DropdownItem[];
    }) => import("react/jsx-runtime").JSX.Element;
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
export declare const WithIcons: Story;
export declare const UsingChildren: Story;
//# sourceMappingURL=Dropdown.stories.d.ts.map