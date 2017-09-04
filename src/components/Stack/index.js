// @flow
import * as React from 'react'
import { compact } from 'lodash'
import { compose, withState, withHandlers } from 'recompose'
import { Stack, StackItem } from './styles'

type Props = {
  index: number,
  next: Function,
  prev: Function,
  setIndex: Function,
  toolbar: React.Element<*>,
  children?: React.Element<*>
}

const Component = ({ index, next, prev, setIndex, toolbar, children, ...props }: Props) => {
  const stack = { index, next, prev, setIndex }
  const items = React.Children.map(
    compact(children),
    (item, i) => (
      <StackItem isVisible={index === i}>
        {React.cloneElement(item, { stack })}
      </StackItem>
    )
  )

  return (
    <Stack>
      {items}
      {toolbar && React.cloneElement(toolbar, { stack })}
    </Stack>
  )
}

Component.displayName = 'Stack'

export default compose(
  withState('index', 'setIndex', 0),
  withHandlers({
    next: ({ setIndex, children }) => () => setIndex(n => (n + 1) % children.length),
    prev: ({ setIndex, children }) => () => setIndex(n => n - 1 < 0 ? children.length - 1 : n - 1)
  })
)(Component)
