import React from 'react'
import { Link, Icon } from '@coderbox/atoms'
import { JobExtra } from './styles'

const Component = ({ job, ...props }) => {
  let { views, candidates } = job
  if (!candidates) {
    candidates = []
  }

  return (
    <JobExtra {...props}>
      <Link>
        <Icon name='bar-chart' color='gray' />
        {views} view(s)
      </Link>
      <Link href={`/app/candidates/${job._id}`}>
        <Icon name='inbox' color='gray' />
        {candidates.length} candidate(s)
      </Link>
    </JobExtra>
  )
}

Component.displayName = 'JobExtra'
export default Component
