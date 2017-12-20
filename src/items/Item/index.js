import React from 'react'
import cx from 'classnames'
import { string, element } from 'prop-types'
import { Avatar } from 'elements'
import { Item, ItemLeft, ItemRight } from './styles'

const Component = ({ image, email, tag, children, hideLeft, ...props }) => {
  let className = cx('item', props.className)
  return (
    <Item className={className}>
      {!hideLeft && (
        <ItemLeft>
          <Avatar email={email} src={image} size={60} />
          {tag}
        </ItemLeft>
      )}
      <ItemRight>
        {children}
      </ItemRight>
    </Item>
  )
}

Component.displayName = 'Item'
Component.propTypes = {
  image: string,
  tag: element
}

export default Component
