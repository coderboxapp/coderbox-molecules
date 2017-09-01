import React from 'react'
import { position } from '@coderbox/prop-types'
import { Title, Subtitle, Link } from '@coderbox/atoms'
import { DateRange, Tags, Markdown } from 'elements'
import { Item } from 'items'

const Component = ({ data }) => {
  let { company, responsabilities, title, technologies, timePeriod } = data

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

Component.displayName = 'PositionItem'
Component.propTypes = {
  data: position
}

export default Component
