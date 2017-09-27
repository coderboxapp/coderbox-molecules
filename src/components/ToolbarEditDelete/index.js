// @flow
import React from 'react'
import { Button, Icon, YesNo } from '@coderbox/atoms'
import { compose, mapProps, withState } from 'recompose'
import { Toolbar } from './styles'

import type { Colors } from '@coderbox/atoms'

type Props = {
  index: number,
  pending?: boolean,
  onEdit?: Function,
  onCancel?: Function,
  onDelete?: Function,
  color?: Colors
}

const Component = ({ index, color, pending, onEdit, onCancel, onDelete, ...props }: Props) => {
  console.log(props)
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
      <YesNo color={color} size='small' onYes={onDelete}>
        <Button color={color} tone='2' size='small' isLoading={pending} isIcon>
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

export default compose(
  withState('pending', 'setPending', false),
  mapProps(p => {
    return {
      ...p,
      onDelete: () => {
        p.setPending(true)
        p.onDelete().then(() => {
          p.setPending(false)
        })
      }
    }
  })
)(Component)
