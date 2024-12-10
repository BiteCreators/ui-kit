import React from "react";
export declare const useTextArea: ({ autoResize, onChange, }: {
    autoResize?: boolean;
    onChange: React.ChangeEventHandler<HTMLTextAreaElement> | undefined;
}) => {
    handleChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
    textAreaId: string;
    textAreaRef: React.RefObject<HTMLTextAreaElement>;
};
//# sourceMappingURL=useTextArea.d.ts.map