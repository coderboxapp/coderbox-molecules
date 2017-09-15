import React from 'react'
import moment from 'moment'
import { Icon, Text } from '@coderbox/atoms'
import { DaysAgo } from './styles'

const Component = ({date, ...props}) => {
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
    <DaysAgo>
      <Text color={justAdded ? 'success' : 'gray'} tone={justAdded}><Icon name='calendar-o' />{dateToDisplay}</Text>
    </DaysAgo>
  )
}

Component.displayName = 'DaysAgo'
export default Component
