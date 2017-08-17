import React from 'react'
import Avatar from 'react-avatar'
import * as styles from './styles'

const AvatarComponent = ({ size, ...props }) => {
  return (
    <styles.Avatar size={size}>
      <Avatar {...props} size={size} />
    </styles.Avatar>
  )
}

AvatarComponent.defaultProps = {
  size: 100
}

export default AvatarComponent
