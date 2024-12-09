import { FieldValues, useController } from "react-hook-form";

import { Select, SelectProps } from "../select/Select";
import { FormFieldProps } from "./types";

type Props<T extends FieldValues> = FormFieldProps<T> & SelectProps;

export const FormSelect = <T extends FieldValues>({
  control,
  defaultValue,
  error,
  name,
  rules,
  ...props
}: Props<T>) => {
  const { field, fieldState } = useController({ control, name, rules });

  return (
    <Select
      {...field}
      defaultValue={defaultValue}
      error={error ?? fieldState.error?.message}
      {...props}
      onValueChange={(value) => {
        field.onChange(value);
        if (props.onValueChange) {
          props.onValueChange(value);
        }
      }}
    />
  );
};
