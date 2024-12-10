import { FieldValues } from "react-hook-form";
import { RadioGroupProps } from "../radio-group/RadioGroup";
import { FormFieldProps } from "./types";
type Props<T extends FieldValues, V extends number | string> = FormFieldProps<T> & RadioGroupProps<V>;
export declare const FormRadioGroup: <T extends FieldValues, V extends number | string>({ control, error, name, rules, ...props }: Props<T, V>) => import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=FormRadioGroup.d.ts.map