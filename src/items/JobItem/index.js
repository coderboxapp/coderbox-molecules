import React from 'react'
import { object } from 'prop-types'
import { Title, Subtitle, Link, Text } from '@coderbox/atoms'
import { DaysAgo, Tags } from 'elements'
import { Item } from 'items'
import * as s from './styles'

class Component extends React.Component {
  render () {
    let { company, location, title, minSalary, technologies, createdAt } = this.props.item

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
}

Component.displayName = 'JobItem'
Component.propTypes = {
  item: object
}
export default Component
