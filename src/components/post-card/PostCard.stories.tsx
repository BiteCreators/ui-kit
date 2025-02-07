import { Meta, StoryObj } from '@storybook/react'

import { PostCard } from './PostCard'
import { argsForStories } from './dataExample/dataExample'

const meta = {
  component: PostCard,
} satisfies Meta<typeof PostCard>

type Story = StoryObj<typeof PostCard>

export const Default: Story = {
  args: argsForStories,
}

export const DefaultAdmin: Story = {
  args: { ...argsForStories, isAdmin: true },
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

export const ShortTextWithMediumContainer: Story = {
  args: {
    ...argsForStories,
    description: 'Short text.',
    postSize: 300,
  },
}

export const LongTextWithDefaultContainer: Story = {
  args: {
    ...argsForStories,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vehicula sapien eget orci tincidunt tincidunt. Morbi varius libero vitae felis venenatis, ac consectetur sapien tincidunt. Aenean at metus sem. Nam et tristique metus. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
}

export const LongTextWithLargeContainer: Story = {
  args: {
    ...argsForStories,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vehicula sapien eget orci tincidunt tincidunt. Morbi varius libero vitae felis venenatis, ac consectetur sapien tincidunt. Aenean at metus sem. Nam et tristique metus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    postSize: 400,
  },
}

export default meta
