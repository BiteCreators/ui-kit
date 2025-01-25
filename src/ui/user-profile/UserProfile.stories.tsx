import { Meta, StoryObj } from '@storybook/react'

import exampleImage from '../../assets/exampleAvatar.png'
import { UserProfile } from './UserProfile'

const meta = {
  component: UserProfile,
} satisfies Meta<typeof UserProfile>

type Story = StoryObj<typeof UserProfile>

export const Default: Story = {
  args: {
    avatarUrl: exampleImage.src,
    profileId: 1,
    userName: 'Any name',
  },
}

export default meta
