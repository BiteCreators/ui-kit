import { StoryObj } from "@storybook/react";
declare const meta: {
    component: ({ children, className, disabledButton, handleBack, handleInteractOutside, handleNext, isOpen, maxWidth, mode, nextButtonTitle, onOpenChange, title, }: {
        children: import("react").ReactNode;
        className?: string;
        disabledButton?: boolean;
        handleBack?: () => void;
        handleInteractOutside?: (e: any) => void;
        handleNext?: () => void;
        isOpen: boolean;
        maxWidth?: string;
        mode: "custom" | "default" | "outside" | "withStep";
        nextButtonTitle?: string;
        onOpenChange?: (open: boolean) => void;
        title?: import("react").ReactNode | string;
    }) => import("react").ReactPortal | null;
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
export declare const Closed: Story;
export declare const OutsideMode: Story;
export declare const CustomMode: Story;
//# sourceMappingURL=Modal.stories.d.ts.map