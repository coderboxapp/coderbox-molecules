import React from 'react'
import { compose, withState, withHandlers } from 'recompose'
import { Stack, StackItem } from './styles'

const Component = ({ index, next, prev, toolbar, children, ...props }) => {
  const stack = { index, next, prev }
  const items = React.Children.map(
    children,
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
Component.propTypes = {}

export default compose(
  withState('index', 'setIndex', 0),
  withHandlers({
    next: ({ setIndex, children }) => () => setIndex(n => (n + 1) % children.length),
    prev: ({ setIndex, children }) => () => setIndex(n => n - 1 < 0 ? children.length - 1 : n - 1)
  })
)(Component)
