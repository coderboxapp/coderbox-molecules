import React from 'react'
import { Button, Icon } from '@coderbox/atoms'
import { StackToolbar } from './styles'

const Component = ({ stack, onDelete, color = 'gray', ...props }) => {
  return (
    <StackToolbar {...props}>
      {stack.index === 0 &&
        <Button isIcon color={color} tone='2' size='small' onClick={stack.next}>
          <Icon name='edit' />
        </Button>
      }
      {stack.index === 1 &&
        <Button isIcon color={color} tone='2' size='small' onClick={stack.prev}>
          <Icon name='times' />
        </Button>
      }
      <Button isIcon color={color} tone='2' size='small' onClick={onDelete}>
        <Icon name='trash' />
      </Button>
    </StackToolbar>
  )
}

Component.displayName = 'StackEditToolbar'
export default Component
