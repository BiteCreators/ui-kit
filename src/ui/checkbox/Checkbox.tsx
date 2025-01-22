import React, { ChangeEvent, ComponentProps, ReactNode, forwardRef, useId, useState } from 'react'

import { cn } from '@byte-creators/utils'

import { CheckmarkOutline } from '../../assets/icons/components'

type CheckboxProps = {
  error?: string
  onChecked?: (value: boolean) => void
  text?: ReactNode
} & ComponentProps<'input'>

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  (
    { checked, className, disabled, error, id, onChecked, required, text, ...props }: CheckboxProps,
    ref
  ) => {
    const checkboxId = useId()
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
      onChecked && onChecked(e.target.checked)
    }

    return (
      <div className={'flex flex-col justify-start'}>
        <div className={'inline-flex items-center'}>
          <input
            checked={checked}
            className={'absolute z-[-1] opacity-0'}
            disabled={disabled}
            id={id ?? checkboxId}
            onChange={handleChange}
            required={required}
            type={'checkbox'}
            {...props}
            ref={ref}
          />
          <label
            className={cn(
              'relative',
              'bg-inherit w-9 h-9 rounded-2xl',
              'active:bg-dark-100 global-hover:hover:bg-dark-300 focus:bg-dark-500',
              'before:inline-block before:content-[""]',
              'before:absolute before:left-[9px] before:top-[9px] ',
              'before:w-[18px] before:h-[18px]',
              'before:border-solid before:border-2  before:rounded-sm',
              disabled && '!bg-inherit',
              checked && !disabled && 'before:bg-light-100 before:border-none',
              checked && disabled && 'before:bg-dark-100 before:border-none',
              !checked && disabled && 'before:border-light-900',
              !checked && !disabled && 'before:border-light-500',
              className
            )}
            htmlFor={id ?? checkboxId}
          >
            {checked && (
              <CheckmarkOutline
                className={cn(
                  'absolute left-[6px] top-[6px]',
                  'fill-current text-dark-900',
                  disabled && 'fill-current text-light-500'
                )}
                height={'22'}
                viewBox={'0 0 22 22'}
                width={'22'}
              />
            )}
          </label>
          {text && (
            <span
              className={cn(
                'mx-1 font-weight400 text-sm max-w-[280px]',
                disabled && 'text-light-900'
              )}
            >
              {text}
            </span>
          )}
        </div>
        {!!error && (
          <p className={'text-sm text-danger-500'}>{error ? error : 'This field is required'} </p>
        )}
      </div>
    )
  }
)
