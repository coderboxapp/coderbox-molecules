import React from 'react'
import moment from 'moment'
import { Icon, Text } from '@coderbox/atoms'

const DaysAgo = ({date, ...props}) => {
  let daysAgo = moment().diff(moment(date), 'days')
  let dateToDisplay = daysAgo + ' days ago'
  let justAdded = 0

  if (daysAgo < 3) {
    dateToDisplay = 'Just added'
    justAdded = 1
  }

  if (daysAgo > 30) {
    dateToDisplay = moment().diff(moment(date), 'months') + ' month(s) ago'
  }

  return (
    <div>
      <Text color={justAdded ? 'success' : 'gray'} tone={justAdded}><Icon name='calendar-o' />{dateToDisplay}</Text>
    </div>
  )
}

export default DaysAgo
