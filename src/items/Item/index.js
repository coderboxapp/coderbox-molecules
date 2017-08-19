import React from 'react'
import { Avatar } from 'elements'
import { Item, ItemLeft, ItemContent } from './styles'

class Component extends React.Component {
  static displayName = 'Item'
  static defaultProps = {}

  render () {
    let { image, children } = this.props

    return (
      <Item>
        <ItemLeft>
          <Avatar src={image} size={58} />
        </ItemLeft>
        <ItemContent>
          {children}
        </ItemContent>
      </Item>
    )
  }
}

export default Component
