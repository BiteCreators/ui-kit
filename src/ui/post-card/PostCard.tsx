import { useGetRelativeTime, useShowMore } from '@byte-creators/utils'
import Link from 'next/link'
import { motion } from 'framer-motion'
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
    <div className={'max-w-[400px]'} style={{ position: 'relative' }}>
      <div className={'cursor-pointer'}>
        {!postImageUrl ? (
          <Link href={`/profile/${ownerId}/publications/${postId}`}>
            <div className={'flex w-full justify-center items-center bg-dark-500 h-[234px]'}>
              <Image />
            </div>
          </Link>
        ) : (
          <Link href={`/profile/${ownerId}/publications/${postId}`}>
            <motion.div
              style={{
                height: postImageHight,
                maxHeight: '400px',
                overflow: 'hidden',
                position: 'relative',
              }}
            >
              <motion.img
                alt={postImageUrl}
                animate={{ y: isCollapsed ? 0 : -50 }} // Двигаем изображение
                height={postImageHight}
                initial={{ y: 0 }}
                src={postImageUrl}
                style={{
                  clipPath: isCollapsed ? 'none' : 'inset(0 0 50% 0)', // Обрезаем изображение
                  objectFit: 'cover',
                }}
                transition={{ stiffness: 100, type: 'spring' }}
                width={postImageWidth}
              />
            </motion.div>
          </Link>
        )}
      </div>

      <motion.div
        animate={{
          y: isCollapsed ? 0 : -30, // Поднимаем весь блок, когда раскрываем текст
        }}
        initial={{ y: 0 }} // Изначально все элементы находятся на одном уровне
        style={{ overflow: 'hidden' }}
        transition={{ duration: 0.3 }}
      >
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

        <motion.div
          animate={{
            y: isCollapsed ? 0 : -30,
          }}
          initial={{ y: 0 }}
          style={{ overflow: 'hidden' }}
          transition={{ duration: 0.3 }}
        >
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
        </motion.div>
      </motion.div>
    </div>
  )
}
