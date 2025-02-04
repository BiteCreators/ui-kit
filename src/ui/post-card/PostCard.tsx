import { cn, useCalculateHeight, useGetRelativeTime, useShowMore } from '@byte-creators/utils'
import { motion } from 'framer-motion'
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
  postContainerHeight?: number
  postId: number
  postImageUrl: string
  postSize?: number
  userName: string
}

export const PostCard = ({
  avatarOwner,
  createdAt,
  description,
  isAdmin,
  onClickBlockButton,
  ownerId,
  postContainerHeight = 400,
  postId,
  postImageUrl,
  postSize = 235,
  userName,
}: Props) => {
  const { getRelativeTime } = useGetRelativeTime()
  const relativeTime = getRelativeTime(new Date(createdAt).getTime())

  const { collapsable, isCollapsed, textToShow, toggleShowMore } = useShowMore({
    text: description,
  })
  const textLength = textToShow.length

  const { calculateImageHeight, calculateTextHeight } = useCalculateHeight(textLength, postSize)

  const textCollapsableHeight = calculateTextHeight(textLength)
  const imgCollapsableHeight = calculateImageHeight(textLength)

  return (
    <div
      className={'mb-[30px] relative'}
      style={{
        height: postContainerHeight,
        maxWidth: postSize,
      }}
    >
      <div className={cn('cursor-pointer')}>
        <Link href={`/profile/${ownerId}/publications/${postId}`}>
          <motion.div className={'mb-3 overflow-hidden relative'}>
            {postImageUrl ? (
              <motion.img
                alt={postImageUrl}
                animate={{ y: isCollapsed ? 0 : -10 }}
                className={'mb-3 object-cover'}
                initial={{ y: 0 }}
                src={postImageUrl}
                style={{
                  clipPath: isCollapsed ? 'none' : `inset(0 0 ${imgCollapsableHeight} 0)`,
                }}
                transition={{ stiffness: 100, type: 'spring' }}
              />
            ) : (
              <motion.div
                animate={{ y: isCollapsed ? 0 : -10 }}
                className={cn('flex justify-center items-center bg-dark-500 mb-3 object-cover')}
                initial={{ y: 0 }}
                style={{
                  clipPath: isCollapsed ? 'none' : `inset(0 0 ${imgCollapsableHeight} 0)`,
                  height: `${postSize}px`,
                }}
                transition={{ stiffness: 100, type: 'spring' }}
              >
                <Image />
              </motion.div>
            )}
          </motion.div>
        </Link>
      </div>

      <motion.div
        animate={{
          y: isCollapsed ? 0 : textCollapsableHeight,
        }}
        className={'mb-3 overflow-hidden'}
        initial={{ y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className={cn('flex gap-3 items-center justify-between')}>
          <UserProfile avatarUrl={avatarOwner} profileId={ownerId} userName={userName} />
          {isAdmin && (
            <Button className={'pr-0 bg-transparent'} onClick={onClickBlockButton} variant={'icon'}>
              <Block />
            </Button>
          )}
        </div>
        <Typography className={'mt-3 mb-2 text-light-900'} variant={'small-text'}>
          {relativeTime}
        </Typography>

        <motion.div className={'overflow-hidden'} initial={{ y: 0 }} transition={{ duration: 0.3 }}>
          <Typography className={'mt-[3px] break-words'}>
            {textToShow}
            {collapsable && (
              <span
                className={
                  'text-primary-500 underline underline-offset-2 cursor-pointer hover:text-primary-300'
                }
                onClick={toggleShowMore}
              >
                {isCollapsed ? ' Show more' : ' Hide'}
              </span>
            )}
          </Typography>
        </motion.div>
      </motion.div>
    </div>
  )
}
