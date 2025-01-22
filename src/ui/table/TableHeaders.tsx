import { cn } from '@byte-creators/utils'

import { TableHeader } from './Table'

type Props = {
  className?: string
  headers: TableHeader[]
}
export const TableHeaders = ({ className, headers }: Props) => {
  const headersItemStyle = cn(
    'pl-6 pr-16 table-cell align-middle sm:pr-0 sm:pl-3 lg:pl-6',
    className
  )

  return headers.map((header, ind) => {
    return (
      <li className={cn(headersItemStyle)} key={ind}>
        <div className={'flex items-center'}>
          <span className={'mr-[6px]'}>{header.name}</span>
          {!!header.sort && header.sort}
        </div>
      </li>
    )
  })
}
