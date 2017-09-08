// @flow
import * as React from 'react'
import cx from 'classnames'
import Stack from 'components/Stack'
import StackEditToolbar from 'components/StackEditToolbar'
import { withStack } from '@coderbox/hocs'
import { Factory } from 'utils'
import { EditableItem } from './styles'

type Props = {
  data: any,
  factory: {createForm: Function, createItem: Function},
  stack: { index: number, setIndex: (i: number) => void},
  className?: string,
  children?: React.Node,
  onSave: Function,
  onDelete: Function
}

class Component extends React.Component<Props> {
  static displayName = 'EditableItem'
  static defaultProps = {
    color: 'primary'
  }

  render () {
    let { data, stack, onSave, onDelete, ...props } = this.props
    let className = cx('timeline', props.className)
    let factory = this.props.factory || new Factory()
    let Item = factory.createItem(data)
    let Form = factory.createForm(data, {
      onSubmit: (formData) => onSave(formData),
      onSubmitComplete: () => stack.setIndex(0),
      onCancel: () => stack.setIndex(0)
    })

    return (
      <EditableItem {...props} className={className}>
        <Stack index={stack.index}>
          {Item}
          {Form}
        </Stack>
        <StackEditToolbar
          isFixed
          index={stack.index}
          onEdit={() => stack.setIndex(1)}
          onDelete={() => onDelete(data)}
          onCancel={() => stack.setIndex(0)} />
      </EditableItem>
    )
  }
}

export default withStack(Component)
