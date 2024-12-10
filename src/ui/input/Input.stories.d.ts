import { StoryObj } from "@storybook/react";
declare const meta: {
    component: import("react").ForwardRefExoticComponent<{
        error?: string;
        inputType?: "default" | "reveal" | "search";
        label?: string;
        onSearchClick?: () => void;
    } & import("react").InputHTMLAttributes<HTMLInputElement> & import("react").RefAttributes<HTMLInputElement>>;
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
export declare const DefaultRequired: Story;
export declare const Disabled: Story;
export declare const Error: Story;
export declare const Search: Story;
export declare const SearchError: Story;
export declare const SearchDisabled: Story;
export declare const Reveal: Story;
export declare const RevealError: Story;
export declare const RevealDisabled: Story;
//# sourceMappingURL=Input.stories.d.ts.map