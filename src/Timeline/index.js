import React from 'react'
import cx from 'classnames'
import { bool, array, object, func, string } from 'prop-types'
import TimelineItem from 'TimelineItem'
import { Timeline } from './styles'

class Component extends React.Component {
  state = { newItem: null }

  static displayName = 'Timeline'
  static propTypes = {
    items: array,
    editable: bool,
    suggestions: object,
    color: string,
    onSave: func,
    onCreate: func,
    onDelete: func
  }

  static defaultProps = {
    items: [],
    editable: false,
    suggestions: {
      titles: [],
      companies: []
    },
    color: 'primary'
  }

  renderAddItem () {
    return <div>asdd item</div>
  }

  render () {
    let { items, editable, suggestions, onSave, onDelete, ...props } = this.props
    let className = cx('timeline', props.className)

    return (
      <Timeline {...props} className={className}>
        {editable && this.renderAddItem()}
        {items.map((item, index) => {
          return (
            <TimelineItem
              key={index}
              item={item}
              isOdd={Boolean(index % 2)}
            />
          )
        })}
      </Timeline>
    )
  }
}

export default Component
