import { FieldValues } from "react-hook-form";
import { TextAreaProps } from "../text-area/TextArea";
import { FormFieldProps } from "./types";
type Props<T extends FieldValues> = FormFieldProps<T> & TextAreaProps;
export declare const FormTextArea: <T extends FieldValues>({ control, defaultValue, error, name, rules, ...props }: Props<T>) => import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=FormTextArea.d.ts.map