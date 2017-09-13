import React from 'react'
import { job } from '@coderbox/prop-types'
import { bool } from 'prop-types'
import { Title, Subtitle, Link, Text, Tag } from '@coderbox/atoms'
import { DaysAgo, Tags, Markdown } from 'elements'
import { Item } from 'items'
import * as s from './styles'

const Component = ({ data, showTag, showDesc }) => {
  let { _id, company, location, title, minSalary, technologies, createdAt, description, published } = data
  let tag = showTag ? <Tag color='success' tone={1} size='small'>{published ? 'published' : 'draft'}</Tag> : null

  return (
    <s.JobItem>
      <Item image={company.logo} tag={tag}>
        <DaysAgo date={createdAt} />
        <Link href={`/app/jobs/${_id}`}>
          <Title size='large' color='black'>{title}</Title>
        </Link>
        <Subtitle size='normal' color='gray'>
          <Link>@{company.name}</Link>, {location && location.formatted_address}
        </Subtitle>
        <Text color='success' tone={1}>
          min. {minSalary} € / month
        </Text>
        <Tags tags={technologies} />
        {showDesc && <Markdown source={description} />}
      </Item>
    </s.JobItem>
  )
}

Component.displayName = 'JobItem'
Component.propTypes = {
  data: job,
  showTag: bool,
  showDesc: bool
}

export default Component
