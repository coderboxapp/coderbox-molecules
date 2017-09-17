// @flow
import React from 'react'
import { Title, Subtitle, Link, Text, Button, Icon } from '@coderbox/atoms'
import { intersectionBy } from 'lodash'
import { DaysAgo, Tags } from 'elements'
import { Item } from 'items'
import { Toolbar } from './styles'

type Props = {
  data: any
}

const Component = ({ data }: Props) => {
  let { profile, job } = data
  let technologies = intersectionBy(profile.radar.technologies, job.radar.technologies, t => t.name)
  let score = Math.round(((technologies.length + 0.5) / job.radar.technologies.length) * 100)

  if (score > 100) score = 100

  return (
    <Item email={profile.email}>
      <DaysAgo date={data.createdAt} />
      <Title size='large'>{profile.name}</Title>
      <Subtitle size='normal'><Link>{profile.email}</Link></Subtitle>
      <Text color={score > 30 ? 'success' : 'danger'} tone={1}>
          Score: <b>{score}%</b>
      </Text>
      <Tags tags={profile.radar.technologies} />
      <Toolbar>
        <Button color='primary' size='small' isIcon>
          <Icon name='user' />
        </Button>
        <Button color='success' size='small' isIcon>
          <Icon name='envelope-o' />
        </Button>
        <Button color='gray' tone='2' size='small' isIcon>
          <Icon name='area-chart' />
        </Button>
      </Toolbar>
    </Item>
  )
}

Component.displayName = 'CandidateItem'
export default Component
