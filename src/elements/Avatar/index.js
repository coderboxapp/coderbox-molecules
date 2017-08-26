import React from 'react'
import Avatar from 'react-avatar'
import { Link } from '@coderbox/atoms'
import * as styles from './styles'

const AvatarComponent = ({ size, isEdit, ...props }) => {
  return (
    <styles.Avatar size={size}>
      <Avatar {...props} size={size} />
      {isEdit && <Link href='https://en.gravatar.com/support/activating-your-account/' size='small'>Change Picture</Link>}
    </styles.Avatar>
  )
}

AvatarComponent.defaultProps = {
  size: 100
}

export default AvatarComponent
