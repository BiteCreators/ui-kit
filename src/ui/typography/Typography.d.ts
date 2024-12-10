import React, { ReactNode } from "react";
declare const typographyVariants: {
    h1: string;
    h2: string;
    h3: string;
    large: string;
    "medium-text": string;
    "regular-link": string;
    "regular-text": string;
    "small-text": string;
};
type Props = {
    children?: ReactNode;
    className?: string;
    variant?: keyof typeof typographyVariants;
};
export declare function Typography({ children, className, variant, }: Props): React.DetailedReactHTMLElement<{
    className: string;
}, HTMLElement>;
export {};
//# sourceMappingURL=Typography.d.ts.map