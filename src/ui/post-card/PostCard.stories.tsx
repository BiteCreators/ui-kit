import { Meta, StoryObj } from '@storybook/react'

import { PostCard } from './PostCard'
import { argsForStories } from './dataExample/dataExample'

const meta = {
  component: PostCard,
} satisfies Meta<typeof PostCard>

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: argsForStories,
}

export const WithoutImage: Story = {
  args: {
    ...argsForStories,
    createdAt: '2025-01-21T18:34:16.693Z',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    postImageUrl: '',
  },
}
export const WithoutDescription: Story = {
  args: {
    ...argsForStories,
    createdAt: '2024-01-20T18:34:16.693Z',
    description: '',
    userName: 'Dmitry',
  },
}

export default meta
