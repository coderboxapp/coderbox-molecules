import React from 'react'
import { Markdown } from './styles'

const Component = ({source, ...props}) => {
  return <Markdown source={source} {...props} />
}

Component.displayName = 'Markdown'
Component.defaultProps = {
  tone: 0,
  source: ''
}

export default Component
