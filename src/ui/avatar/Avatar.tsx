import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'

import { cn } from '@byte-creators/utils'
import Link from 'next/link'

import example from '../../assets/exampleAvatar.png'
import { Close } from '../../assets/icons/components'

type Props = {
  alt?: string
  avatarURL: string
  className?: string
  href?: string
  imgStyles?: string
  isLoading?: boolean
  isNextLink?: boolean
  linkContainerClassname?: string
  onClose?: () => void
  rel?: string
  rounded?: boolean
  showClose?: boolean
}

export const Avatar = ({
  alt = 'Avatar',
  avatarURL,
  className,
  href,
  imgStyles,
  isLoading = false,
  isNextLink = false,
  linkContainerClassname,
  onClose,
  rel = '',
  rounded = true,
  showClose = false,
}: Props) => {
  const closeHandler = () => {
    if (onClose) {
      onClose()
    }
  }

  const AvatarImage = (
    <SkeletonTheme baseColor={'#3f3e3e'} highlightColor={'#575656'}>
      <span
        className={cn(['relative inline-block', className])}
        style={{ height: '100%', width: '100%' }}
      >
        {isLoading && (
          <Skeleton
            circle={rounded}
            containerClassName={'absolute top-0 left-0 w-full h-full'}
            height={'100%'}
            width={'100%'}
          />
        )}
        <img
          alt={alt}
          className={cn(imgStyles, [rounded && 'rounded-full'])}
          src={avatarURL || example}
          style={{ visibility: isLoading ? 'hidden' : 'visible' }}
        />
        {showClose && (
          <span
            className={cn([
              'bg-dark-700 flex justify-center items-center absolute w-9 h-9 right-0 top-[4%]',
              rounded && 'rounded-full',
            ])}
            onClick={closeHandler}
          >
            <span
              className={
                'flex items-center justify-center bg-danger-500 rounded-full hover:cursor-pointer'
              }
            >
              <Close />
            </span>
          </span>
        )}
      </span>
    </SkeletonTheme>
  )

  return isNextLink && href ? (
    <Link
      className={cn([linkContainerClassname, 'max-w-full h-full text-center'])}
      href={href}
      rel={rel}
    >
      {AvatarImage}
    </Link>
  ) : (
    <a
      className={cn([linkContainerClassname, 'max-w-full h-full text-center flex'])}
      href={href}
      rel={rel}
    >
      {AvatarImage}
    </a>
  )
}
