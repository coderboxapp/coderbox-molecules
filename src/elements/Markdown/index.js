import React from 'react'
import cx from 'classnames'
import { Button } from '@coderbox/atoms'
import { Markdown } from './styles'

class Component extends React.Component {
  state = { readMore: true, max: 100 }
  static displayName = 'Markdown'
  static defaultProps = {
    source: ''
  }

  toggleReadMore () {
    this.setState({ readMore: !this.state.readMore })
  }

  transform (text) {
    let { readMore, max } = this.state
    if (!readMore) return text

    if (text.length > max) {
      return text.substring(0, max) + '...'
    }

    return text
  }

  render () {
    let { source, ...props } = this.props
    let { readMore, max } = this.state
    let className = cx('markdown', props.className)
    let child = (
      <Button color='primary' isOutlined onClick={() => this.toggleReadMore()}>
        {readMore ? '+ Read More' : '- Read Less'}
      </Button>
    )

    if (source.length < max) {
      child = null
    }

    return <Markdown {...props} source={this.transform(source)} childAfter={child} className={className} />
  }
}

export default Component
