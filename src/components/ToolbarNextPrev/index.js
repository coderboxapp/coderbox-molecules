import React from 'react'
import { Button, Group, Icon } from '@coderbox/atoms'
import { Toolbar } from './styles'

const Component = ({ onPrev, onNext, ...props }) => {
  return (
    <Toolbar {...props}>
      <Group>
        <Button color='gray' tone='2' isIcon onClick={onPrev}>
          <Icon name='arrow-left' />
        </Button>
        <Button color='gray' tone='2' isIcon onClick={onNext}>
          <Icon name='arrow-right' />
        </Button>
      </Group>
    </Toolbar>
  )
}

Component.displayName = 'ToolbarNextPrev'
export default Component
