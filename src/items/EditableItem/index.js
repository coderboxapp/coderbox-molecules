// @flow
import * as React from 'react'
import cx from 'classnames'
import Stack from 'components/Stack'

type Props = {
  className?: string,
  children?: React.Node
}

class Component extends React.Component<Props> {
  static displayName = 'EditableItem'
  static defaultProps = {
    color: 'primary'
  }

  render () {
    let { children, ...props } = this.props
    let className = cx('timeline', props.className)

    return (
      <div {...props} className={className}>
        {children}
      </div>
    )
  }
}

export default Component
