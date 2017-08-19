import React from 'react'
import moment from 'moment'
import { Icon, Text } from '@coderbox/atoms'
import * as s from './styles'

const DateRange = ({dateRange, ...props}) => {
  let startDate = moment(dateRange.start).format('MM/YYYY')
  let endDate = dateRange.end ? moment(dateRange.end).format('MM/YYYY') : 'Present'

  return (
    <s.DateRange>
      <Text color='gray'><Icon name='calendar-o' /> {startDate}</Text>
      <Icon color='gray' name='long-arrow-right' />
      <Text color='gray'>{endDate}</Text>
    </s.DateRange>
  )
}

export default DateRange
