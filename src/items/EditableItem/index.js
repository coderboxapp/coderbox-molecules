// @flow
import * as React from 'react'
import cx from 'classnames'
import { Stack } from '@coderbox/atoms'
import { withStack } from '@coderbox/hocs'
import { ToolbarEditDelete } from 'components'
import { EditableItem } from './styles'

type Props = {
  data: any,
  factory: {createForm: Function, createItem: Function},
  stack: { index: number, setIndex: (i: number) => void},
  suggestions: [],
  hideToolbar?: bool,
  className?: string,
  children?: React.Node,
  onSave: Function,
  onDelete: Function
}

class Component extends React.Component<Props> {
  static displayName = 'EditableItem'
  static defaultProps = {
    color: 'primary',
    hideToolbar: false
  }

  render () {
    let { data, stack, onSave, onDelete, suggestions, hideToolbar, ...props } = this.props
    let className = cx('timeline', props.className)
    let factory = this.props.factory

    if (!factory) {
      throw new Error('Factory cannot be null!')
    }

    let Item = factory.createItem(data, props)
    let Form = factory.createForm(data, {
      onSubmit: (formData) => onSave(formData),
      onSubmitComplete: () => stack.setIndex(0),
      onCancel: () => stack.setIndex(0),
      suggestions
    })

    return (
      <EditableItem {...props} className={className}>
        <Stack index={stack.index}>
          {Item}
          {Form}
        </Stack>
        {!hideToolbar &&
          <ToolbarEditDelete
            isFixed
            index={stack.index}
            onEdit={() => stack.setIndex(1)}
            onDelete={() => onDelete(data)}
            onCancel={() => stack.setIndex(0)} />
        }
      </EditableItem>
    )
  }
}

export default withStack(Component)
