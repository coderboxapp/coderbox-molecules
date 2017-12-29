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
  showDesc?: bool,
  hideLeft?: bool
}

const Component = ({ data, href, showTag, showDesc, hideLeft }: Props) => {
  const tagColor = data.published ? 'primary' : 'gray'
  const tag = showTag ? <Tag color={tagColor} size='small'>{data.published ? 'published' : 'draft'}</Tag> : null

  return (
    <s.JobItem>
      <Item image={data.company.logo} tag={tag} hideLeft={hideLeft}>
        <DaysAgo date={data.createdAt} />
        <Link href={href} color='black'>
          <Title size='large'>{data.title}</Title>
        </Link>
        <Subtitle size='normal' color='gray'>
          <Link href={`/app/companies/${data.company.name}`}>@{data.company.name}</Link>, {data.location && data.location.formatted_address}
        </Subtitle>
        {data.type === 'job' &&
          <div className='row'>
            <Text color='gray'>
              min. salary:
            </Text>
            <Text color='primary'>
              <b>{data.minSalary} € / month</b>
            </Text>
          </div>
        }
        {data.score !== undefined &&
          <div className='row'>
            <Text color='gray'>
              score:
            </Text>
            <Text color={data.score > 30 ? 'success' : 'danger'}>
              <b>{data.score} %</b>
            </Text>
          </div>
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
              <Tag color='secondary' tone={1} isIcon><Icon name='male' /></Tag>
              <Tag color='secondary'>team work</Tag>
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
