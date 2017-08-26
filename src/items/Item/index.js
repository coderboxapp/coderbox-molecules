import React from 'react'
import cx from 'classnames'
import { Avatar } from 'elements'
import { Item, ItemLeft, ItemContent } from './styles'

const Component = ({ image, children, ...props }) => {
  let className = cx('item', props.className)
  return (
    <Item className={className}>
      <ItemLeft>
        <Avatar src={image} size={58} />
      </ItemLeft>
      <ItemContent>
        {children}
      </ItemContent>
    </Item>
  )
}

Component.displayName = 'Item'
export default Component
