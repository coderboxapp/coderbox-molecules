import React from 'react'
import { Button, Group, Icon } from '@coderbox/atoms'
import { StackToolbar } from './styles'

const Component = ({ stack, ...props }) => {
  return (
    <StackToolbar {...props}>
      <Group>
        <Button color='gray' tone='2' isIcon onClick={stack.prev}>
          <Icon name='arrow-left' />
        </Button>
        <Button color='gray' tone='2' isIcon onClick={stack.next}>
          <Icon name='arrow-right' />
        </Button>
      </Group>
    </StackToolbar>
  )
}

Component.displayName = 'StackToolbar'
export default Component
