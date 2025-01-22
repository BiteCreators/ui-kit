'use client'
import { ComponentProps } from 'react'
import { ReCAPTCHA } from 'react-google-recaptcha'

import { cn } from '@byte-creators/utils'
import { useRouter } from 'next/router'

type Props = ComponentProps<typeof ReCAPTCHA>

export const Recaptcha = ({ ...props }: Props) => {
  const { locale } = useRouter()

  return (
    <div className={cn('recaptchaContainer', props.className)}>
      <ReCAPTCHA hl={locale} {...props} />
    </div>
  )
}
