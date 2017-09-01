import React from 'react'
import { job } from '@coderbox/prop-types'
import { Title, Subtitle, Link, Text } from '@coderbox/atoms'
import { DaysAgo, Tags } from 'elements'
import { Item } from 'items'
import * as s from './styles'

const Component = ({ data }) => {
  let { company, location, title, minSalary, technologies, createdAt } = data

  return (
    <s.JobItem>
      <Item image={company.logo}>
        <DaysAgo date={createdAt} />
        <Title size='large'>{title}</Title>
        <Subtitle size='normal' color='gray'>
          <Link>@{company.name}</Link>, {location.formatted_address}
        </Subtitle>
        <Text color='success' tone={1}>
          min. {minSalary} € / month
        </Text>
        <Tags tags={technologies} />
      </Item>
    </s.JobItem>
  )
}

Component.displayName = 'JobItem'
Component.propTypes = {
  data: job
}

export default Component
