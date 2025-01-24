import { useGetRelativeTime, useShowMore } from '@byte-creators/utils'
import Link from 'next/link'

import { Image } from '../../assets/icons/components'
import { Typography } from '../typography/Typography'
import { UserProfile } from '../user-profile/UserProfile'

type Props = {
  avatarOwner: string
  createdAt: string
  description: string
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
      <div className={'mt-3 flex gap-3 items-center'}>
        <UserProfile avatarUrl={avatarOwner} profileId={ownerId} userName={userName} />
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
