import { StoryObj } from "@storybook/react";
import { TabsBase } from "./Tabs";
declare const meta: {
    argTypes: {
        disabled: {
            description: string;
        };
        onClick: {
            description: string;
        };
        tabsData: {
            control: {
                disable: true;
            };
            description: string;
        };
    };
    component: <T extends string = string>({ ariaLabel, className, disabled, listClassName, onClick, tabsData, value, }: {
        ariaLabel: string;
        className?: string;
        disabled?: boolean;
        listClassName?: string;
        onClick?: ((value: T) => void) | undefined;
        tabsData: {
            content: import("react").ReactNode;
            label: string;
            value: T;
        }[];
        value: string;
    }) => import("react/jsx-runtime").JSX.Element;
    parameters: {
        layout: string;
    };
    tags: string[];
};
export default meta;
export declare const Default: StoryObj<typeof TabsBase>;
export declare const Disabled: StoryObj<typeof TabsBase>;
//# sourceMappingURL=Tabs.stories.d.ts.map