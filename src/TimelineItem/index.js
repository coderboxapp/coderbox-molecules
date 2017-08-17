import React from 'react'
import cx from 'classnames'
import moment from 'moment'
import { object, bool } from 'prop-types'
import { reverse } from 'lodash'
import { Box, Icon, Subtitle } from '@coderbox/atoms'
import { transform, toYears } from '@coderbox/utils'
import { Item } from 'components'
import * as s from './styles'

const Component = ({ item, isOdd, ...props }) => {
  let icon = item.icon || 'plus'
  let date = item.timePeriod.end ? moment(item.timePeriod.end).format('MMM YYYY') : 'Present'
  let className = cx('timeline-item', props.className)
  let childs = [
    <s.Item alignRight={!isOdd} key={0}>
      <Subtitle>{date}</Subtitle>
      <Subtitle size='small' color='gray'>{toYears(item.timePeriod)}</Subtitle>
    </s.Item>,
    <Icon name={icon} color='primary' isCircular key={1} />,
    <s.Item key={2}>
      <Box>
        <Item item={transform(item)} />
      </Box>
    </s.Item>
  ]

  if (isOdd) childs = reverse(childs)

  return (
    <s.Container {...props} className={className}>
      { childs.map(c => c) }
    </s.Container>
  )
}

Component.displayName = 'TimelineItem'
Component.propTypes = {
  item: object,
  isOdd: bool
}

export default Component
