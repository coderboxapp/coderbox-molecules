import React from 'react'
import cx from 'classnames'
import moment from 'moment'
import { object, bool } from 'prop-types'
import { compose, mapProps } from 'recompose'
import { reverse } from 'lodash'
import { Box, Icon, Subtitle } from '@coderbox/atoms'
import { toYears } from '@coderbox/utils'
import { PositionItem, EducationItem } from 'items'
import * as s from './styles'

const Component = ({ date, dateRange, icon, element, isOdd, ...props }) => {
  let className = cx('timeline-item', props.className)
  let childs = [
    <s.Item alignRight={!isOdd} key={0}>
      <Subtitle>{date}</Subtitle>
      <Subtitle size='small' color='gray'>{dateRange}</Subtitle>
    </s.Item>,
    <Icon name={icon} color='primary' isCircular key={1} />,
    <s.Item key={2}>
      <Box>
        {element}
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
Component.propsTypes = {
  item: object,
  isOdd: bool
}

const createElement = item => {
  let elementTypes = {position: PositionItem, education: EducationItem}
  let element = React.createElement(elementTypes[item.type], { item })

  return element
}

const createForm = item => {
  return null
}

export default compose(
  mapProps(props => {
    let { item } = props
    return {
      ...props,
      icon: item.icon || 'plus',
      date: item.timePeriod.end ? moment(item.timePeriod.end).format('MMM YYYY') : 'Present',
      dateRange: toYears(item.timePeriod),
      element: createElement(item),
      form: createForm(item)
    }
  })
)(Component)
