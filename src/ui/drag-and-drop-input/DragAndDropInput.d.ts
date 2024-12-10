import React from "react";
type DragAndDropInputProps = {
    accept?: string;
    children: React.ReactNode;
    fileInputRef?: React.RefObject<HTMLInputElement>;
    multiple?: boolean;
    onFileSelect: (file: File) => void;
};
export declare const DragAndDropInput: React.FC<DragAndDropInputProps>;
export {};
//# sourceMappingURL=DragAndDropInput.d.ts.map