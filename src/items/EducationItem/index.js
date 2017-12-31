import React from 'react'
import { Title, Subtitle, Link } from '@coderbox/atoms'
import { DateRange, Tags } from 'elements'
import { Item } from 'items'

const Component = ({ data }) => {
  let { institution, degree, technologies, timePeriod } = data

  return (
    <Item image={institution.logo}>
      <DateRange dateRange={timePeriod} />
      <Title size='large'>{institution.name}</Title>
      <Subtitle size='normal' color='gray'><Link>{degree}</Link></Subtitle>
      <Tags tags={technologies} />
    </Item>
  )
}

Component.displayName = 'EducationItem'
export default Component
