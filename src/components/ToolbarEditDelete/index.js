import React from 'react'
import cx from 'classnames'
import { Button, Icon, YesNo } from '@coderbox/atoms'
import { withPending } from '@coderbox/hocs'
import { Toolbar } from './styles'

const Component = ({ index, color, pending, onEdit, onCancel, onDelete, ...props }) => {
  const className = cx('editdelete-toolbar', props.className)

  return (
    <Toolbar {...props} className={className}>
      {index === 0 &&
        <Button isIcon color={color} tone='2' size='small' onClick={onEdit} className='btn-edit'>
          <Icon name='edit' />
        </Button>
      }
      {index === 1 &&
        <Button isIcon color={color} tone='2' size='small' onClick={onCancel}>
          <Icon name='times' />
        </Button>
      }
      <YesNo color={color} size='small' onYes={onDelete}>
        <Button color={color} tone='2' size='small' isLoading={pending} isIcon className='btn-delete'>
          <Icon name='trash' />
        </Button>
      </YesNo>
    </Toolbar>
  )
}

Component.displayName = 'EditDeleteToolbar'
Component.defaultProps = {
  index: 0,
  color: 'gray'
}

export default withPending(['onDelete'])(Component)
