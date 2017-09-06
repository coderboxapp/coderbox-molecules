// @flow
import * as React from 'react'
import cx from 'classnames'
import Stack from 'components/Stack'
import StackEditToolbar from 'components/StackEditToolbar'
import { withStack } from 'hocs'
import { EditableItem } from './styles'

type Props = {
  className?: string,
  children?: React.Node,
  onSave: Function,
  onDelete: Function,
  stack: { index: number, setIndex: (i: number) => void}
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
    let Form = formFactory(data)

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
