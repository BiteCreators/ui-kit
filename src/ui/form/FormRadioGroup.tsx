"use client";
import { FieldValues, useController } from "react-hook-form";

import { RadioGroup, RadioGroupProps } from "../radio-group/RadioGroup";
import { FormFieldProps } from "./types";

type Props<
  T extends FieldValues,
  V extends number | string,
> = FormFieldProps<T> & RadioGroupProps<V>;

export const FormRadioGroup = <
  T extends FieldValues,
  V extends number | string,
>({
  control,
  error,
  name,
  rules,
  ...props
}: Props<T, V>) => {
  const { field, fieldState } = useController({ control, name, rules });

  return (
    <RadioGroup
      {...field}
      error={error ?? fieldState.error?.message}
      {...props}
    />
  );
};
