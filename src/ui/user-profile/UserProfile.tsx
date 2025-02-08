import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'

import { cn } from '@byte-creators/utils'
import Link from 'next/link'

import { Avatar } from '../avatar/Avatar'
import { Typography } from '../typography/Typography'

type Props = {
  avatarUrl: string
  className?: string
  classNameTypography?: string
  isLoading?: boolean
  profileId: number
  linkOption?: 'profile/' | 'users/'
  userName: string
}

export const UserProfile = ({
  avatarUrl,
  className,
  classNameTypography,
  isLoading = false,
  profileId,
  userName,
  linkOption = 'profile/',
}: Props) => {
  return (
    <SkeletonTheme baseColor={'#3f3e3e'} highlightColor={'#575656'}>
      <div className={cn(className, 'flex gap-3 items-center')}>
        <div className={'w-9 h-9'}>
          <Avatar
            avatarURL={avatarUrl || ''}
            href={`/${linkOption + profileId.toString()}`}
            isLoading={isLoading}
            isNextLink
          />
        </div>
        <div>
          {isLoading ? (
            <Skeleton height={20} width={150} />
          ) : (
            <Link
              className={'hover:text-primary-300 text-light-100 duration-75'}
              href={`/${linkOption + profileId.toString()}`}
            >
              <Typography className={classNameTypography} variant={'h3'}>{userName}</Typography>
            </Link>
          )}
        </div>
      </div>
    </SkeletonTheme>
  )
}
