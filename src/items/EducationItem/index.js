import React from 'react'
import { education } from '@coderbox/prop-types'
import { Title, Subtitle, Link } from '@coderbox/atoms'
import { DateRange, Tags } from 'elements'
import { Item } from 'items'

const Component = ({ data }) => {
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
Component.propTypes = {
  data: education.isRequired
}

export default Component
