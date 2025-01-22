import { useState } from 'react'

import { Meta, StoryObj } from '@storybook/react'

import { Pagination } from './Pagination'

const meta = {
  component: Pagination,
} satisfies Meta<typeof Pagination>

type Story = StoryObj<typeof Pagination>

export const Default: Story = {
  args: {},
  render: args => {
    const [currentPage, setCurrentPage] = useState(1)
    const onClickPaginationButton = (page: number) => {
      setCurrentPage(page)
    }

    return (
      <Pagination
        currentPage={currentPage}
        onChangePagesPortion={() => {}}
        onClickPaginationButton={onClickPaginationButton}
        pagesCount={55}
      />
    )
  },
}

export const CustomOptions: Story = {
  args: { pagesPortion: '6', pagesPortionOptions: ['2', '6', '8', '1000'] },
  render: args => {
    const [currentPage, setCurrentPage] = useState(1)
    const onClickPaginationButton = (page: number) => {
      setCurrentPage(page)
    }

    return (
      <Pagination
        currentPage={currentPage}
        onChangePagesPortion={() => {}}
        onClickPaginationButton={onClickPaginationButton}
        pagesCount={55}
        pagesPortion={args.pagesPortion}
        pagesPortionOptions={args.pagesPortionOptions}
      />
    )
  },
}

export default meta
