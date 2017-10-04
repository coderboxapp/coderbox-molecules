// @flow
import React from 'react'
import { Title, Subtitle, Link, Button, Icon, Tag, Group, YesNo } from '@coderbox/atoms'
import { intersectionBy } from 'lodash'
import { DaysAgo, Tags } from 'elements'
import { CandidateCharts } from 'components'
import { compose, withState, withHandlers, mapProps } from 'recompose'
import { Item } from 'items'
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
  let { profile, job, status } = data
  let technologies = intersectionBy(profile.radar.technologies, job.radar.technologies, t => t.name)
  let score = Math.round(((technologies.length + 0.5) / job.radar.technologies.length) * 100)
  let statusColor = (status) => {
    if (status === 'apply') return 'gray'
    if (status === 'waiting') return 'accent'
    if (status === 'accepted') return 'success'
    if (status === 'rejected') return 'danger'
    return 'gray'
  }
  if (score > 100) score = 100

  return (
    <Item email={profile.email}>
      <DaysAgo date={data.createdAt} />
      <Title size='large'>{profile.name}</Title>
      <Subtitle size='normal'><Link>{profile.email}</Link></Subtitle>
      <Tags>
        <Group>
          <Tag color='gray' tone={1}>score:</Tag>
          <Tag color={score > 30 ? 'success' : 'danger'}>{score}%</Tag>
        </Group>
        <Group>
          <Tag color='gray' tone={1}>status:</Tag>
          <Tag color={statusColor(status)}>{status}</Tag>
        </Group>
      </Tags>
      <Tags tags={profile.radar.technologies} />
      <Toolbar>
        {(status === 'apply' && !pending) && (
          <ToolbarGroup>
            <YesNo color='success' size='small' onYes={onAccept}>
              <Button color='success' size='small' isOutlined isLoading={pending}>
                <Icon name='check' />
                Accept
              </Button>
            </YesNo>
            <YesNo color='danger' size='small'>
              <Button color='danger' size='small' isOutlined isLoading={pending}>
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
        <Button href={`/app/${profile._id}`} color='primary' size='small' target='_blank' isIcon>
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
  withState('showCharts', 'setShowCharts', false),
  withState('pending', 'setPending', false),
  withHandlers({
    toggleCharts: ({ setShowCharts }) => () => setShowCharts(show => !show)
  }),
  mapProps(p => {
    return {
      ...p,
      onAccept: () => {
        p.setPending(true)
        p.onAccept().then(() => {
          console.log('doooone')
          p.setPending(false)
        })
      },
      onReject: () => {
        p.setPending(true)
        p.onAccept().then(() => {
          p.setPending(false)
        })
      }
    }
  })
)

export default compose(
  withChartsToggle
)(Component)
