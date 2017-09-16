// @flow
import React from 'react'
import { Title, Subtitle, Link, Text, Tag } from '@coderbox/atoms'
import { DaysAgo, Tags, Markdown } from 'elements'
import { Item } from 'items'
import * as s from './styles'

type Props = {
  data: any,
  showTag?: bool,
  showDesc?: bool
}

const Component = ({ data, showTag, showDesc }: Props) => {
  let { _id, company, location, title, minSalary, technologies, createdAt, description, published } = data
  let tag = showTag ? <Tag color={published ? 'primary' : 'gray'} tone={0} size='small'>{published ? 'published' : 'draft'}</Tag> : null

  return (
    <s.JobItem>
      <Item image={company.logo} tag={tag}>
        <DaysAgo date={createdAt} />
        <Link href={`/app/jobs/${_id}`} color='black'>
          <Title size='large'>{title}</Title>
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
export default Component
