import React from 'react'
import cx from 'classnames'
import { Tag } from '@coderbox/atoms'
import lodash from 'lodash'
import { Tags } from './styles'

const Component = ({tags, margin, reverse, children, ...props}) => {
  let className = cx('tags', props.className)
  let elements = [ children ].concat(tags.map(
    tag => <Tag {...props} key={tag._id}>{tag.name}</Tag>
  ))

  if (reverse) elements = lodash.reverse(elements)

  return (
    <Tags margin={margin} className={className}>
      {elements}
    </Tags>
  )
}

Component.displayName = 'Tags'
Component.defaultProps = {
  color: 'gray',
  tone: 2,
  tags: []
}

export default Component
