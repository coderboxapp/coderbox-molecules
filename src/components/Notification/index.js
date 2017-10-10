import React from 'react'
import cx from 'classnames'
import moment from 'moment'
import { Icon, Text, Button } from '@coderbox/atoms'
import { Notification } from './styles'
import { withPending } from '@coderbox/hocs'

const Component = ({ icon, date, btnLabel, btnIcon, children, hideButton, pending, onClick, ...props }) => {
  const className = cx('notification', props.className)
  const time = moment(date).from(moment().add(5, 'm'), false)

  return (
    <Notification {...props} className={className}>
      <Icon name={icon} color={props.color} size='large' isInverted />
      <div className='content'>
        {children}
        {!hideButton && (
          <Button onClick={onClick} color='light' size='small'>
            <Icon name={btnIcon} />
            {btnLabel}
          </Button>
        )}
      </div>
      <Text className='time' color='gray'><Icon name='clock-o' />{time}</Text>
    </Notification>
  )
}

Component.displayName = 'Notification'
Component.defaultProps = {
  icon: 'check',
  color: 'success',
  btnIcon: 'trash-o',
  btnLabel: 'Delete'
}

export default withPending(['onClick'])(Component)
