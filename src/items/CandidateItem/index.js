import React from 'react'
import { DaysAgo, Tags } from 'elements'
import { Title, Subtitle, Link, Tag, Group, Icon } from '@coderbox/atoms'
import { Item } from 'items'

const Component = ({ data, score, selectedTechnologies }) => {
  let { user, status } = data
  let technologies = user.stats ? user.stats.technologies : []
  let statusToColor = {'apply': 'grey', 'contacted': 'secondary', 'interviewed': 'primary', 'accepted': 'success', 'rejected': 'danger'}

  return (
    <Item className='candidate-item' email={user.email}>
      <DaysAgo date={data.createdAt} />
      <Title size='large'>{user.name}</Title>
      <Subtitle size='normal'><Link>{user.email}</Link></Subtitle>
      <Link size='small' color='grey' style={{marginTop: -10}}>
        <Icon name='phone-square' size='normal' /> {user.phone || 'No Phone'}
      </Link>
      <Tags>
        <Group>
          <Tag color='light'>score:</Tag>
          <Tag color={score > 15 ? 'success' : 'danger'}>{score}%</Tag>
        </Group>
        <Group>
          <Tag color='light'>status:</Tag>
          <Tag color={statusToColor[status]}>{status}</Tag>
        </Group>
      </Tags>
      <Tags tags={technologies} selectedTags={selectedTechnologies} />
    </Item>
  )
}

Component.displayName = 'CandidateItem'
Component.defaultProps = {
  score: 0,
  selectedTechnologies: []
}

export default Component
