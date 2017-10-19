import React from 'react'
import { Box, Stack } from '@coderbox/atoms'
import { withStack } from '@coderbox/hocs'
import { each, find } from 'lodash'
import { compose, mapProps } from 'recompose'
import { Container } from './styles'
import CandidateAreaChart from '../CandidateAreaChart'
import CandidateRadarChart from '../CandidateRadarChart'
import ToolbarNextPrev from '../ToolbarNextPrev'

const Component = ({ data, stack }) => {

  return (
    <Container>
      <Stack index={stack.index % 2}>
        <CandidateRadarChart data={data} />
        <CandidateAreaChart data={data} />
      </Stack>
      <ToolbarNextPrev onNext={stack.next} onPrev={stack.prev} />
    </Container>
  )
}

Component.displayName = 'CandidateCharts'

const categories = [
  { category: 'frontend', job: 10, profile: 8 },
  { category: 'management', job: 10, profile: 8 },
  { category: 'mobile', job: 10, profile: 8 },
  { category: 'backend', job: 10, profile: 8 },
  { category: 'embedded', job: 10, profile: 8 },
  { category: 'database', job: 10, profile: 8 }
]

const withChartData = mapProps(
  ({ candidate }) => {
    let jobMin = 10
    let profileMin = 8
    let data = categories.concat()
    let jobRadar = candidate.job.radar
    let profileRadar = candidate.profile.radar

    each(profileRadar.categories, c => {
      let entry = find(data, e => e.category === c.name)

      if (!entry) {
        entry = { category: c.name, job: jobMin, profile: c.duration }
        data.push(entry)
      } else {
        entry.profile = c.duration
      }
    })

    each(jobRadar.categories, c => {
      let entry = find(data, e => e.category === c.name)

      if (!entry) {
        entry = { category: c.name, job: c.duration, profile: profileMin }
        data.push(entry)
      } else {
        entry.job = c.duration
      }
    })

    return { data }
  }
)

export default compose(
  withChartData,
  withStack
)(Component)
