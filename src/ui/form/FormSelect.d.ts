import { FieldValues } from "react-hook-form";
import { SelectProps } from "../select/Select";
import { FormFieldProps } from "./types";
type Props<T extends FieldValues> = FormFieldProps<T> & SelectProps;
export declare const FormSelect: <T extends FieldValues>({ control, defaultValue, error, name, rules, ...props }: Props<T>) => import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=FormSelect.d.ts.map