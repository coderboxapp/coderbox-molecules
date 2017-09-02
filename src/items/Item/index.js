import React from 'react'
import cx from 'classnames'
import { string, element } from 'prop-types'
import { Tag } from '@coderbox/atoms'
import { Avatar } from 'elements'
import { Item, ItemLeft, ItemContent } from './styles'

const Component = ({ image, tag, children, ...props }) => {
  let className = cx('item', props.className)
  return (
    <Item className={className}>
      <ItemLeft>
        <Avatar src={image} size={60} />
        {tag}
      </ItemLeft>
      <ItemContent>
        {children}
      </ItemContent>
    </Item>
  )
}

Component.displayName = 'Item'
Component.propTypes = {
  image: string.isRequired,
  tag: element
}

export default Component
