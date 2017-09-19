// @flow
import React from 'react'
import { Title, Subtitle, Link, Group, Text, Tag, Icon } from '@coderbox/atoms'
import { DaysAgo, Tags, Markdown } from 'elements'
import { Item } from 'items'
import * as s from './styles'

type Props = {
  data: any,
  href?: string,
  showTag?: bool,
  showDesc?: bool
}

const Component = ({ data, href, showTag, showDesc }: Props) => {
  const tagColor = data.published ? 'primary' : 'gray'
  const tag = showTag ? <Tag color={tagColor} size='small'>{data.published ? 'published' : 'draft'}</Tag> : null

  return (
    <s.JobItem>
      <Item image={data.company.logo} tag={tag}>
        <DaysAgo date={data.createdAt} />
        <Link href={href} color='black'>
          <Title size='large'>{data.title}</Title>
        </Link>
        <Subtitle size='normal' color='gray'>
          <Link>@{data.company.name}</Link>, {data.location && data.location.formatted_address}
        </Subtitle>
        {data.type === 'job' &&
          <Text color='success' tone={1}>
            min. {data.minSalary} € / month
          </Text>
        }
        <Tags tags={data.technologies}>
          {data.paid && (
            <Group>
              <Tag color='success' tone={1} isIcon><Icon name='gift' /></Tag>
              <Tag color='success'>paid</Tag>
            </Group>
          )}
          {data.teamWork && (
            <Group>
              <Tag color='accent' tone={1} isIcon><Icon name='male' /></Tag>
              <Tag color='accent'>team work</Tag>
            </Group>
          )}
        </Tags>
        {showDesc && <Markdown source={data.description} />}
      </Item>
    </s.JobItem>
  )
}

Component.displayName = 'JobItem'
export default Component
