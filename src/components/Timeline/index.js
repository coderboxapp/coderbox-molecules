// @flow
import * as React from 'react'
import cx from 'classnames'
import { Timeline } from './styles'

import type { Colors } from '@coderbox/atoms'
import type TimelineRow from '../TimelineRow'

type Props = {
  className?: string,
  color: Colors,
  children?: TimelineRow
}

class Component extends React.Component<Props> {
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
