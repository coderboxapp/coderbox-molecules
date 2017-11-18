// @flow
import React from 'react'
import { Title, Subtitle, Link } from '@coderbox/atoms'
import { DateRange, Tags, Markdown } from 'elements'
import { Item } from 'items'

type Props = {
  data: any
}

const Component = ({ data }: Props) => {
  let { company, responsabilities, title, technologies, timePeriod } = data

  return (
    <Item image={company.logo}>
      <DateRange dateRange={timePeriod} />
      <Title size='large'>{title.name}</Title>
      <Subtitle size='normal' color='gray'><Link href={`/app/companies/${data.company.name}`}>@{company.name}</Link></Subtitle>
      <Tags tags={technologies} />
      <Markdown source={responsabilities} />
    </Item>
  )
}

Component.displayName = 'PositionItem'
export default Component
