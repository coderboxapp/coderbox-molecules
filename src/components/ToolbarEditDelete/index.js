// @flow
import React from 'react'
import { Button, Icon } from '@coderbox/atoms'
import { Toolbar } from './styles'
import type { Colors } from '@coderbox/atoms'

type Props = {
  index: number,
  onEdit?: Function,
  onCancel?: Function,
  onDelete?: Function,
  color?: Colors
}

const Component = ({ index, onEdit, onCancel, onDelete, color, ...props }: Props) => {
  return (
    <Toolbar {...props}>
      {index === 0 &&
        <Button isIcon color={color} tone='2' size='small' onClick={onEdit}>
          <Icon name='edit' />
        </Button>
      }
      {index === 1 &&
        <Button isIcon color={color} tone='2' size='small' onClick={onCancel}>
          <Icon name='times' />
        </Button>
      }
      <Button isIcon color={color} tone='2' size='small' onClick={onDelete}>
        <Icon name='trash' />
      </Button>
    </Toolbar>
  )
}

Component.displayName = 'EditDeleteToolbar'
Component.defaultProps = {
  index: 0,
  color: 'gray'
}

export default Component