import React from 'react'

type Props = {
  fullScreen?: boolean
}
export const Loader = ({ fullScreen }: Props) => {
  return (
    <div className={fullScreen ? 'wrapperLoader' : ''}>
      <span className={'loader'}></span>
    </div>
  )
}
