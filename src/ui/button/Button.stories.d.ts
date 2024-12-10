declare const meta: {
    component: ({ asChild, className, variant, ...props }: {
        asChild?: boolean;
        variant?: "icon" | "outline" | "primary" | "secondary" | "text";
    } & import("react").ClassAttributes<HTMLButtonElement> & import("react").ButtonHTMLAttributes<HTMLButtonElement>) => import("react/jsx-runtime").JSX.Element;
};
export declare const Primary: {
    args: {
        children: string;
        onClick: () => void;
        title: string;
        variant: string;
    };
};
export declare const Secondary: {
    args: {
        children: string;
        onClick: () => void;
        title: string;
        variant: string;
    };
};
export declare const Outline: {
    args: {
        children: string;
        onClick: () => void;
        title: string;
        variant: string;
    };
};
export declare const Text: {
    args: {
        children: string;
        onClick: () => void;
        title: string;
        variant: string;
    };
};
export declare const LinkButton: {
    render: () => import("react/jsx-runtime").JSX.Element;
};
export declare const Disabled: {
    args: {
        children: string;
        disabled: boolean;
        onClick: () => void;
        title: string;
        variant: string;
    };
};
export default meta;
//# sourceMappingURL=Button.stories.d.ts.map