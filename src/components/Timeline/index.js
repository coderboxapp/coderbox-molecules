import * as React from 'react'
import cx from 'classnames'
import { Timeline } from './styles'

class Component extends React.Component {
  static displayName = 'Timeline'
  static defaultProps = {
    color: 'primary'
  }

  render () {
    let { children, ...props } = this.props
    let className = cx('timeline', props.className)

    return (
      <Timeline {...props} className={className}>
        {children}
      </Timeline>
    )
  }
}

export default Component
