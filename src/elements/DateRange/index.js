import React from 'react'
import moment from 'moment'
import { Icon, Text } from '@coderbox/atoms'
import * as s from './styles'

const DateRange = ({dateRange, ...props}) => {
  let startDate = moment(dateRange.start).format('MMM/YYYY')
  let endDate = dateRange.end ? moment(dateRange.end).format('MMM/YYYY') : 'Present'

  return (
    <s.DateRange>
      <Text color='gray'><Icon className='calendar' name='calendar-o' /> {startDate}</Text>
      <Icon color='gray' className='arrow' name='long-arrow-right' />
      <Text color='gray'>{endDate}</Text>
    </s.DateRange>
  )
}

export default DateRange
