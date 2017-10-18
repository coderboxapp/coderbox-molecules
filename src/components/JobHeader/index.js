import React from 'react'
import { Title, Text, Subtitle, Group, Tag, Icon, Link } from '@coderbox/atoms'
import { Avatar, Location, Tags } from 'elements'
import * as styles from './styles'

const Component = ({job, ...props}) => {
  let tags = job.technologies.slice(0, 5)

  return (
    <styles.JobHeader>
      <Avatar src={job.company.logo} />
      <Title>{job.title}</Title>
      <Link href={`/app/companies/${job.company._id}`}>
        <Subtitle color='primary'>@{job.company.name}</Subtitle>
      </Link>
      <Location location={job.location} />
      {job.minSalary > 0 && <Text color='success' tone={1} align='center'>min. {Math.round(job.minSalary / 12)} € / month</Text>}
      <Tags color='white' tags={tags}>
        {job.paid && (
          <Group>
            <Tag color='success' tone={1} isIcon><Icon name='gift' /></Tag>
            <Tag color='success'>paid</Tag>
          </Group>
        )}
        {job.teamWork && (
          <Group>
            <Tag color='accent' tone={1} isIcon><Icon name='male' /></Tag>
            <Tag color='accent'>team work</Tag>
          </Group>
        )}
      </Tags>
    </styles.JobHeader>
  )
}

Component.displayName = 'JobHeader'
export default Component
