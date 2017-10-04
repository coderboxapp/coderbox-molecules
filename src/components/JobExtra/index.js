import React from 'react'
import { Link, Icon } from '@coderbox/atoms'
import { JobExtra } from './styles'

const Component = ({ _id, views, candidates, ...props }) => {
  return (
    <JobExtra {...props}>
      <Link>
        <Icon name='bar-chart' color='gray' />
        {views} view(s)
      </Link>
      <Link href={`/app/candidates/${_id}`}>
        <Icon name='inbox' color='gray' />
        {candidates.length} candidate(s)
      </Link>
    </JobExtra>
  )
}

Component.displayName = 'JobExtra'
Component.defaultProps = {
  views: 0,
  candidates: []
}
export default Component
