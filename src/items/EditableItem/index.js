// @flow
import * as React from 'react'
import cx from 'classnames'
import Stack from 'components/Stack'
import StackEditToolbar from 'components/StackEditToolbar'
import { withStack } from 'hocs'
import { EditableItem } from './styles'

type Props = {
  data: any,
  itemFactory: (d: any, p: any) => React.Node,
  formFactory: (d: any, p: any) => React.Node,
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
    let { data, itemFactory, formFactory, stack, onSave, onDelete, ...props } = this.props
    let className = cx('timeline', props.className)
    let Item = itemFactory(data)
    let Form = formFactory(data, {
      onSave: (formData) => onSave(formData),
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
