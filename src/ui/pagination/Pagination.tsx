'use client'

import { cn, useScopedTranslation } from '@byte-creators/utils'

import { ArrowIosBack, ArrowIosForward } from '../../assets/icons/components'
import { MainPaginationButtons, SelectPagesPortion, SelectPortion } from './PaginationContent'
import { usePagination } from './usePagination'

type Props = {
  className?: string
  currentPage: number
  onChangePagesPortion: (pagesPortion: string) => void
  onClickPaginationButton: (page: number) => void
  pagesCount: number
  pagesPortion?: string
  pagesPortionOptions?: string[]
  siblings?: number
}

const defaultPagesPortionOptions = ['10', '20', '30', '50', '100']

export const Pagination = ({
  className,
  currentPage,
  onChangePagesPortion,
  onClickPaginationButton,
  pagesCount,
  pagesPortion,
  pagesPortionOptions = defaultPagesPortionOptions,
  siblings = 1,
}: Props) => {
  const t = useScopedTranslation('Navigation')
  const {
    isFirstPage,
    isLastPage,
    onClickMainPaginationButton,
    onClickNextPageButton,
    onClickPreviousPageButton,
    paginationRange,
  } = usePagination({
    currentPage,
    onClick: onClickPaginationButton,
    pagesCount,
    siblings,
  })

  pagesPortion = pagesPortion || pagesPortionOptions[0] || '10'

  return (
    <div
      className={cn(
        'inline-flex min-h-[35px] w-full justify-center text-sm font-normal text-light-100 items-center',
        className
      )}
    >
      <div className={cn('flex flex-row items-center')}>
        <button
          className={
            'focus-visible:border-2 focus-visible:outline-none focus-visible:border-primary-700'
          }
          disabled={isFirstPage}
          onClick={onClickPreviousPageButton}
        >
          <ArrowIosBack
            className={cn(isFirstPage && 'text-dark-100')}
            height={'16'}
            viewBox={'0 0 24 24'}
            width={'16'}
          />
        </button>
        <MainPaginationButtons
          currentPage={currentPage}
          onClick={onClickMainPaginationButton}
          paginationRange={paginationRange}
        />
        <button
          className={
            'ml-3 focus-visible:border-2 focus-visible:outline-none focus-visible:border-primary-700'
          }
          disabled={isLastPage}
          onClick={onClickNextPageButton}
        >
          <ArrowIosForward
            className={cn(isLastPage && 'text-dark-100')}
            height={'16'}
            viewBox={'0 0 24 24'}
            width={'16'}
          />
        </button>
      </div>
      <div className={'inline-flex items-center'}>
        <span className={'mr-1 ml-6 '}>{t.paginationShow}</span>
        <SelectPagesPortion defaultValue={pagesPortion} onValueChange={onChangePagesPortion}>
          {pagesPortionOptions.map(option => (
            <SelectPortion key={option} value={option}>
              {option}
            </SelectPortion>
          ))}
        </SelectPagesPortion>
        <span className={'ml-1'}>{t.paginationOnPage}</span>
      </div>
    </div>
  )
}
