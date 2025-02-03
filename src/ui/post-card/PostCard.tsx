import { cn, useGetRelativeTime, useShowMore } from '@byte-creators/utils'
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
  //todo: put in utils
  const textLength = textToShow.length
  const maxTextLength = 500
  let k1 = -50
  let k2 = 15

  if (postSize > 300 && postSize <= 350) {
    k1 = -40
    k2 = 10
  }
  if (postSize > 350) {
    k1 = -30
    k2 = 5
  }

  const calculateTextHeight = (length: number) => {
    const ratio = length / maxTextLength

    if (ratio < 0.5) {
      return k1 - 10
    }
    if (ratio < 0.6) {
      return 2 * k1 - 10
    }
    if (ratio < 0.7) {
      return 3 * k1 - 10
    }
    if (ratio < 0.9) {
      return 4 * k1
    }

    return 4 * k1 - 35
  }

  const calculateImageHeight = (length: number) => {
    const ratio = length / maxTextLength

    if (ratio < 0.5) {
      return `${k2}%`
    }
    if (ratio < 0.6) {
      return `${2.6 * k2}%`
    }
    if (ratio < 0.7) {
      return `${4 * k2}%`
    }
    if (ratio < 0.9) {
      return `${5 * k2}%`
    }

    return `${6 * k2}%`
  }

  const textCollapsableHeight = calculateTextHeight(textLength)
  const imgCollapsableHeight = calculateImageHeight(textLength)

  return (
    <div
      style={{
        height: postContainerHeight,
        marginBottom: 30,
        maxWidth: postSize,
        position: 'relative',
      }}
    >
      <div className={cn('cursor-pointer')}>
        <Link href={`/profile/${ownerId}/publications/${postId}`}>
          <motion.div
            style={{
              marginBottom: '12px',
              overflow: 'hidden',
              position: 'relative',
            }}
          >
            {postImageUrl ? (
              <motion.img
                alt={postImageUrl}
                animate={{ y: isCollapsed ? 0 : -10 }}
                initial={{ y: 0 }}
                src={postImageUrl}
                style={{
                  clipPath: isCollapsed ? 'none' : `inset(0 0 ${imgCollapsableHeight} 0)`,
                  marginBottom: '12px',
                  objectFit: 'cover',
                }}
                transition={{ stiffness: 100, type: 'spring' }}
              />
            ) : (
              <motion.div
                animate={{ y: isCollapsed ? 0 : -10 }}
                className={cn('flex justify-center items-center bg-dark-500')}
                initial={{ y: 0 }}
                style={{
                  clipPath: isCollapsed ? 'none' : `inset(0 0 ${imgCollapsableHeight} 0)`,
                  height: `${postSize}px`,
                  marginBottom: '12px',
                  objectFit: 'cover',
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
        initial={{ y: 0 }}
        style={{ marginTop: '12px', overflow: 'hidden' }}
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

        <motion.div
          initial={{ y: 0 }}
          style={{ overflow: 'hidden' }}
          transition={{ duration: 0.3 }}
        >
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
