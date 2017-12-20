import React from 'react'
import cx from 'classnames'
import { Tag } from '@coderbox/atoms'
import lodash from 'lodash'
import { Tags } from './styles'

const Component = ({tags, selectedTags, selectedColor, margin, reverse, children, ...props}) => {
  let className = cx('tags', props.className)
  let elements = [ children ].concat(tags.map(
    tag => {
      const isSelected = lodash.find(selectedTags, t => t.name === tag.name) !== undefined
      const color = isSelected ? selectedColor : props.color
      const tone = isSelected ? 0 : props.tone
      return <Tag {...props} color={color} tone={tone} key={tag._id}>{tag.name}</Tag>
    }
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
  selectedColor: 'primary',
  tone: 2,
  tags: [],
  selectedTags: []
}

export default Component
