import React from 'react'
import cx from 'classnames'
import moment from 'moment'
import { Icon, Text } from '@coderbox/atoms'
import { Notification } from './styles'

const Component = ({ icon, date, children, ...props }) => {
  const className = cx('notification', props.className)
  const time = moment(date).from(moment().add(5, 'm'), false)

  return (
    <Notification {...props} className={className}>
      <Icon name={icon} color={props.color} size='large' isInverted />
      <div className='content'>{children}</div>
      <Text className='time' color='gray'><Icon name='clock-o' />{time}</Text>
    </Notification>
  )
}

Component.displayName = 'Notification'
Component.defaultProps = {
  icon: 'check',
  color: 'success'
}

export default Component
