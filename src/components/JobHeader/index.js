import React from 'react'
import { Title, Text, Subtitle } from '@coderbox/atoms'
import { Avatar, Location, Tags } from 'elements'
import * as styles from './styles'

const Component = ({job, ...props}) => {
  let tags = job.technologies.slice(0, 5)

  return (
    <styles.JobHeader>
      <Avatar src={job.company.logo} />
      <Title>{job.title}</Title>
      <Subtitle color='primary'>@{job.company.name}</Subtitle>
      <Location location={job.location} />
      {job.minSalary > 0 && <Text color='success' tone={1} align='center'>min. {Math.round(job.minSalary / 12)} € / month</Text>}
      <Tags tags={tags} />
    </styles.JobHeader>
  )
}

Component.displayName = 'JobHeader'
export default Component
