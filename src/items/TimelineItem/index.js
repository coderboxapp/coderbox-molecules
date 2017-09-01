import React from 'react'
import cx from 'classnames'
import moment from 'moment'
import { compose, mapProps } from 'recompose'
import { reverse } from 'lodash'
import { oneOfType, bool } from 'prop-types'
import { position, education } from '@coderbox/prop-types'
import { Box, Icon, Subtitle } from '@coderbox/atoms'
import { toYears } from '@coderbox/utils'
import { Stack, StackEditToolbar } from 'components'
import { PositionItem, EducationItem } from 'items'
import { PositionForm, EducationForm } from 'forms'
import * as s from './styles'

const Component = ({ date, dateRange, icon, element, form, isOdd, ...props }) => {
  let className = cx('timeline-item', props.className)
  let childs = [
    <s.Item alignRight={!isOdd} key={0}>
      <Subtitle>{date}</Subtitle>
      <Subtitle size='small' color='gray'>{dateRange}</Subtitle>
    </s.Item>,
    <Icon name={icon} color='primary' isCircular key={1} />,
    <s.Item key={2}>
      <Box>
        <Stack toolbar={<StackEditToolbar isFixed />}>
          {element}
          {form}
        </Stack>
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
  data: oneOfType([ education, position ]),
  isOdd: bool
}

const formFactory = data => {
  const map = {position: PositionForm, education: EducationForm}
  const type = map[data.type]

  if (!type) return
  return React.createElement(type, { data })
}

const elementFactory = data => {
  const map = {position: PositionItem, education: EducationItem}
  const type = map[data.type]

  if (!type) return
  return React.createElement(type, { data })
}

export default compose(
  mapProps(props => {
    let { data } = props
    return {
      ...props,
      icon: data.icon || 'plus',
      date: data.timePeriod.end ? moment(data.timePeriod.end).format('MMM YYYY') : 'Present',
      dateRange: toYears(data.timePeriod),
      element: elementFactory(data),
      form: formFactory(data)
    }
  })
)(Component)
