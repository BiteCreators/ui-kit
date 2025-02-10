import { cn, useCalculateHeight, useGetRelativeTime, useShowMore } from '@byte-creators/utils'
import { motion } from 'framer-motion'
import Link from 'next/link'

import { Block, Image } from '../../assets/icons/components'
import { Button } from '../../ui/button/Button'
import { Typography } from '../../ui/typography/Typography'
import { UserProfile } from '../../ui/user-profile/UserProfile'
import {ScrollArea} from "../../ui/scroll/ScrollArea";

type Props = {
  avatarOwner: string
  createdAt: string
  description: string
  isAdmin?: boolean
  onClickBlockButton?: () => void
  ownerId: number
  postContainerHeight?: number
  postId: number
  linkOption?: 'profile/' | 'users/'
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
  linkOption,
  postSize = 235,
  userName,
}: Props) => {
  const { getRelativeTime } = useGetRelativeTime()
  const relativeTime = getRelativeTime(new Date(createdAt).getTime())

  const { collapsable, isCollapsed, textToShow, toggleShowMore } = useShowMore({
    text: description,
    defaultVisibleLength: 85,
  })

  const textLength = textToShow.length

  const { calculateImageHeight, calculateTextHeight } = useCalculateHeight(textLength, postSize)

  const textCollapsableHeight = calculateTextHeight(textLength)
  const imgCollapsableHeight = calculateImageHeight(textLength)

  return (
    <div
      className={'mb-1 relative'}
      style={{
        height: postContainerHeight,
        maxWidth: postSize,
      }}
    >
      <div className={cn('cursor-pointer')}>
        <Link href={`/profile/${ownerId}/publications/${postId}`}>
          <motion.div className={'overflow-hidden relative'}>
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
        style={{paddingTop: isCollapsed ? 0 : '12px'}}
        animate={{
          y: isCollapsed ? 0 : textCollapsableHeight,
        }}
        className={'mb-3 overflow-hidden'}
        initial={{ y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className={cn(
          'flex gap-3 items-center justify-between mb-3'
        )}>
          <UserProfile linkOption={linkOption} classNameTypography={'h-[38px] leading-5 overflow-hidden'} avatarUrl={avatarOwner} profileId={ownerId} userName={userName} />
          {isAdmin && (
            <Button className={'pr-0 bg-transparent'} onClick={onClickBlockButton} variant={'icon'}>
              <Block />
            </Button>
          )}
        </div>
        <Typography className={'mb-2 text-light-900'} variant={'small-text'}>
          {relativeTime}
        </Typography>

        <motion.div className={'overflow-hidden'} initial={{ y: 0 }} transition={{ duration: 0.3 }}>
          <ScrollArea style={{height: '278px'}}>
          <p style={{width: '235px', wordBreak: 'break-all' }} className={'text-sm relative'}>
            {textToShow}
            {collapsable && (
              <span
                className={cn(
                  'absolute w-max right-0 pl-1 bg-dark-700 text-primary-500 underline underline-offset-2 cursor-pointer hover:text-primary-300',
                  !isCollapsed && 'static whitespace-nowrap'
                )}
                onClick={toggleShowMore}
              >
                {isCollapsed ? ' Show more' : ' Hide'}
              </span>
            )}
          </p>
          </ScrollArea>
        </motion.div>
      </motion.div>
    </div>
  )
}
