import React from 'react'
import Tags from 'Tags'
import Avatar from 'Avatar'
import DateRange from 'DateRange'
import { Title, Subtitle, Link } from '@coderbox/atoms'
import { Item, ItemLeft, ItemContent } from './styles'

class Component extends React.Component {
  static displayName = 'Item'
  static defaultProps = {}

  renderItem (item) {
    let { image, dateRange, title, subtitle, tags } = item
    return (
      <Item>
        <ItemLeft>
          <Avatar src={image} size={58} />
        </ItemLeft>
        <ItemContent>
          <DateRange dateRange={dateRange} />
          <Title size='large'>{title}</Title>
          <Subtitle size='normal' color='gray'><Link>@{subtitle}</Link></Subtitle>
          <Tags color='gray' tone={2} tags={tags} />
        </ItemContent>
      </Item>
    )
  }
  render () {
    if (this.props.item) {
      return this.renderItem(this.props.item)
    }

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
