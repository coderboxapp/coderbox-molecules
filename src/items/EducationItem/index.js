import React from 'react'
import { object } from 'prop-types'
import { Title, Subtitle, Link } from '@coderbox/atoms'
import { DateRange, Tags, Markdown } from 'elements'
import { Item } from 'items'

class Component extends React.Component {
  render () {
    let { institution, degree, technologies, timePeriod } = this.props.item

    return (
      <Item image={institution.logo}>
        <DateRange dateRange={timePeriod} />
        <Title size='large'>{degree}</Title>
        <Subtitle size='normal' color='gray'><Link>@{institution.name}</Link></Subtitle>
        <Tags tags={technologies} />
      </Item>
    )
  }
}

Component.displayName = 'EducationItem'
Component.propTypes = {
  item: object
}

export default Component
