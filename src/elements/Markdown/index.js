import React from 'react'
import cx from 'classnames'
import { string, number } from 'prop-types'
import { Button } from '@coderbox/atoms'
import { Markdown } from './styles'

class Component extends React.Component {
  state = { readMore: true }

  static displayName = 'Markdown'
  static defaultProps = { source: '', max: 100 }
  static propTypes = {
    source: string,
    max: number
  }

  toggleReadMore () {
    this.setState({ readMore: !this.state.readMore })
  }

  transform (text) {
    let { readMore } = this.state
    let { max } = this.props

    if (!readMore || !max) return text

    if (text.length > max) {
      return text.substring(0, max) + '...'
    }

    return text
  }

  render () {
    let { source, max, ...props } = this.props
    let { readMore } = this.state
    let className = cx('markdown', props.className)
    let child = (
      <p>
        <Button color='primary' isOutlined onClick={() => this.toggleReadMore()}>
          {readMore ? '+ Read More' : '- Read Less'}
        </Button>
      </p>
    )

    if (source.length < max || max === 0) {
      child = null
    }

    return <Markdown {...props} source={this.transform(source)} childAfter={child} className={className} />
  }
}

export default Component
