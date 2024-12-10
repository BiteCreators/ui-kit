import { StoryObj } from "@storybook/react";
declare const meta: {
    component: import("react").ForwardRefExoticComponent<Omit<{
        error?: string;
        onChecked?: (value: boolean) => void;
        text?: import("react").ReactNode;
    } & import("react").ClassAttributes<HTMLInputElement> & import("react").InputHTMLAttributes<HTMLInputElement>, "ref"> & import("react").RefAttributes<HTMLInputElement>>;
};
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
export declare const Text: Story;
export declare const Disabled: Story;
export declare const Error: Story;
export default meta;
//# sourceMappingURL=%D0%A1heckbox.stories.d.ts.map