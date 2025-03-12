import React from 'react'

import { cn } from '@byte-creators/utils'

import { ScrollArea } from '../scroll/ScrollArea'

type Props = {
  children?: React.ReactNode
  footer?: React.ReactNode
  header?: React.ReactNode
  mainClassName?: string
  mobileMenu?: React.ReactNode
  sidebar?: React.ReactNode
}

export const PageLayout = ({
  children,
  footer,
  header,
  mainClassName,
  mobileMenu,
  sidebar,
}: Props) => {
  return (
    <div className={cn('min-h-[100vh]')}>
      {!!header && (
        <div className={'sticky top-0'} style={{ zIndex: 1 }}>
          {header}
        </div>
      )}
      <ScrollArea className={'h-[calc(100vh-60px)] flex flex-col'}>
        <div className={cn('grow', !!sidebar && 'md:grid md:grid-cols-[220px_1fr] md:mb-0 mb-16')}>
          {!!sidebar && (
            <div className={'sticky top-0 left-0 self-start md:block hidden'}>{sidebar}</div>
          )}
          <main className={cn('mt-9', mainClassName)}>{children}</main>
        </div>
        {!!footer && <div>{footer}</div>}
      </ScrollArea>
      {!!mobileMenu && (
        <div className={'md:hidden block fixed bottom-0 w-[100vw] z-40'}>{mobileMenu}</div>
      )}
    </div>
  )
}
