import React from 'react'
import { object } from 'prop-types'
import { Title, Subtitle, Link } from '@coderbox/atoms'
import { DateRange, Tags, Markdown } from 'elements'
import { Item } from 'items'

class Component extends React.Component {
  render () {
    let { company, responsabilities, title, technologies, timePeriod } = this.props.item

    return (
      <Item image={company.logo}>
        <DateRange dateRange={timePeriod} />
        <Title size='large'>{title.name}</Title>
        <Subtitle size='normal' color='gray'><Link>@{company.name}</Link></Subtitle>
        <Tags tags={technologies} />
        <Markdown source={responsabilities} />
      </Item>
    )
  }
}

Component.displayName = 'PositionItem'
Component.propTypes = {
  item: object
}

export default Component
