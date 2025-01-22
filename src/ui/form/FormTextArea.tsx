'use client'
import { FieldValues, useController } from 'react-hook-form'

import { TextArea, TextAreaProps } from '../text-area/TextArea'
import { FormFieldProps } from './types'

type Props<T extends FieldValues> = FormFieldProps<T> & TextAreaProps

export const FormTextArea = <T extends FieldValues>({
  control,
  defaultValue,
  error,
  name,
  rules,
  ...props
}: Props<T>) => {
  const { field, fieldState } = useController({ control, name, rules })

  return <TextArea {...field} error={error ?? fieldState.error?.message} {...props} />
}
