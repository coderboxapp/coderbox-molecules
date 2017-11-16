// @flow
import React from 'react'
import { intersectionBy } from 'lodash'
import { DaysAgo, Tags } from 'elements'
import { compose, withState, withHandlers } from 'recompose'
import { withPending } from '@coderbox/hocs'
import { Title, Subtitle, Link, Button, Icon, Tag, Group, YesNo } from '@coderbox/atoms'
import { Item } from 'items'
import { CandidateCharts } from 'components'
import { Toolbar, ToolbarGroup } from './styles'

type Props = {
  data: any,
  showCharts: bool,
  toggleCharts: Function,
  pending: bool,
  onAccept: Function,
  onReject: Function
}

const Component = ({ data, showCharts, toggleCharts, pending, onAccept, onReject }: Props) => {
  let { user, job, status } = data
  let technologies = intersectionBy(user.radar.technologies, job.radar.technologies, t => t.name)
  let score = Math.round(((technologies.length) / job.radar.technologies.length) * 100)
  let statusColor = (status) => {
    if (status === 'apply') return 'primary'
    if (status === 'waiting') return 'accent'
    if (status === 'accepted') return 'success'
    if (status === 'rejected') return 'danger'
    return 'gray'
  }
  if (score > 100) score = 100

  return (
    <Item email={user.email}>
      <DaysAgo date={data.createdAt} />
      <Title size='large'>{user.name}</Title>
      <Subtitle size='normal'><Link>{user.email}</Link></Subtitle>
      <Tags>
        <Group>
          <Tag color='light'>score:</Tag>
          <Tag color={score > 30 ? 'success' : 'danger'}>{score}%</Tag>
        </Group>
        <Group>
          <Tag color='light'>status:</Tag>
          <Tag color={statusColor(status)}>{status}</Tag>
        </Group>
      </Tags>
      <Tags tags={user.radar.technologies} />
      <Toolbar>
        {(status === 'apply' && !pending) && (
          <ToolbarGroup>
            <YesNo color='success' size='small' tone='1' onYes={onAccept}>
              <Button color='success' size='small' isLoading={pending}>
                <Icon name='check' />
                Accept
              </Button>
            </YesNo>
            <YesNo color='danger' size='small' tone='1' onYes={onReject}>
              <Button color='danger' size='small' isLoading={pending}>
                <Icon name='ban' />
                Reject
              </Button>
            </YesNo>
          </ToolbarGroup>
        )}
        {pending && (
          <Group color='primary' size='small'>
            <Button tone='1' isOutlined isStatic>Saving:</Button>
            <Button isLoading>xx</Button>
          </Group>
        )}
        <Button href={`/app/${user._id}`} color='primary' size='small' target='_blank' isIcon>
          <Icon name='user' />
        </Button>
        <Button color='gray' tone='2' size='small' isIcon isInverted={showCharts} onClick={toggleCharts}>
          <Icon name='area-chart' />
        </Button>
      </Toolbar>
      {showCharts && <CandidateCharts candidate={data} />}
    </Item>
  )
}

Component.displayName = 'CandidateItem'

const withChartsToggle = compose(
  withPending(['onAccept', 'onReject']),
  withState('showCharts', 'setShowCharts', false),
  withHandlers({
    toggleCharts: ({ setShowCharts }) => () => setShowCharts(show => !show)
  })
)

export default compose(
  withChartsToggle
)(Component)
