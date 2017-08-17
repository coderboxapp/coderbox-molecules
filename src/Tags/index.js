import React from 'react'
import { Tag } from '@coderbox/atoms'
import cx from 'classnames'
import { Tags } from './styles'

const Component = ({tags, margin, ...props}) => {
  let className = cx('tags', props.className)

  return (
    <Tags margin={margin} className={className}>
      {tags.map(
        tag => <Tag {...props} key={tag._id}>{tag.name}</Tag>
      )}
    </Tags>
  )
}

Component.displayName = 'Tags'
Component.defaultProps = {
  color: 'gray',
  tone: 2
}

export default Component
