import { useGetRelativeTime, useShowMore } from '@byte-creators/utils'
import Link from 'next/link'

import { Block, Image } from '../../assets/icons/components'
import { Button } from '../button/Button'
import { Typography } from '../typography/Typography'
import { UserProfile } from '../user-profile/UserProfile'

type Props = {
  avatarOwner: string
  createdAt: string
  description: string
  isAdmin?: boolean
  onClickBlockButton?: () => void
  ownerId: number
  postId: number
  postImageHight: number
  postImageUrl: string
  postImageWidth: number
  userName: string
}

export const PostCard = ({
  avatarOwner,
  createdAt,
  description,
  isAdmin,
  onClickBlockButton,
  ownerId,
  postId,
  postImageHight,
  postImageUrl,
  postImageWidth,
  userName,
}: Props) => {
  const { getRelativeTime } = useGetRelativeTime()
  const relativeTime = getRelativeTime(new Date(createdAt).getTime())

  const { collapsable, isCollapsed, textToShow, toggleShowMore } = useShowMore({
    text: description,
  })

  return (
    <div className={'hover:scale-105 duration-75 max-w-[400px]'}>
      <div className={'cursor-pointer'}>
        {!postImageUrl ? (
          <Link href={`/profile/${ownerId}/publications/${postId}`}>
            <div className={'flex w-full justify-center items-center bg-dark-500 h-[234px]'}>
              <Image />
            </div>
          </Link>
        ) : (
          <Link href={`/profile/${ownerId}/publications/${postId}`}>
            <img
              alt={postImageUrl}
              height={postImageHight}
              src={postImageUrl}
              width={postImageWidth}
            />
          </Link>
        )}
      </div>
      <div className={'mt-3 flex gap-3 items-center justify-between'}>
        <UserProfile avatarUrl={avatarOwner} profileId={ownerId} userName={userName} />
        {isAdmin && (
          <Button className={'pr-0 bg-transparent'} onClick={onClickBlockButton} variant={'icon'}>
            <Block />
          </Button>
        )}
      </div>
      <Typography className={'mt-3 text-light-900'} variant={'small-text'}>
        {relativeTime}
      </Typography>
      <Typography className={'mt-[3px] break-all'}>
        {textToShow}
        {collapsable && (
          <span
            className={
              'text-primary-500 underline underline-offset-2 cursor-pointer hover:text-primary-300'
            }
            onClick={toggleShowMore}
          >
            {isCollapsed ? 'Show more' : 'Hide'}
          </span>
        )}
      </Typography>
    </div>
  )
}
