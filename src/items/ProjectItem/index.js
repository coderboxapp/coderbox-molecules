// @flow
import React from 'react'
import { Title, Subtitle, Link } from '@coderbox/atoms'
import { DateRange, Tags, Markdown } from 'elements'
import { Item } from 'items'

type Props = {
  data: any
}

const Component = ({ data }: Props) => {
  let { title, technologies, url, timePeriod, description } = data

  return (
    <Item>
      <DateRange dateRange={timePeriod} />
      <Title size='large'>{title}</Title>
      <Subtitle size='normal' color='gray'><Link>{url}</Link></Subtitle>
      <Tags tags={technologies} />
      <Markdown source={description} />
    </Item>
  )
}

Component.displayName = 'ProjectItem'
export default Component
