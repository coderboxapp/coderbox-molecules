// @flow
import React from 'react'
import { Title, Subtitle, Link } from '@coderbox/atoms'
import { DateRange, Tags } from 'elements'
import { Item } from 'items'

type Props = {
  data: any
}

const Component = ({ data }: Props) => {
  let { institution, degree, technologies, timePeriod } = data

  return (
    <Item image={institution.logo}>
      <DateRange dateRange={timePeriod} />
      <Title size='large'>{degree}</Title>
      <Subtitle size='normal' color='gray'><Link>@{institution.name}</Link></Subtitle>
      <Tags tags={technologies} />
    </Item>
  )
}

Component.displayName = 'EducationItem'
export default Component
