import React from 'react'
import {
  Tooltip,
  RadarChart,
  Radar,
  PolarGrid,
  PolarAngleAxis,
  Legend
} from 'recharts'

const Component = ({ data, ...props }) => {
  return (
    <RadarChart cx={300} cy={190} outerRadius={150} width={580} height={400} data={data} {...props}>
      <PolarGrid gridType='circle' stroke='#eee' strokeWidth={2} />
      <PolarAngleAxis dataKey='category' />
      <Tooltip />
      <Legend align='left' layout='horizontal' verticalAlign='top' />
      <Radar
        name='Job'
        dataKey='job'
        fill='#5fba7d'
        stroke='#5fba7d'
        fillOpacity={0.6}
        dot={{ stroke: '#5fba7d', strokeWidth: 2 }}
        />
      <Radar
        name='Candidate'
        dataKey='profile'
        fill='#1b8ceb'
        stroke='#1b8ceb'
        fillOpacity={0.5}
        dot={{ stroke: '#1b8ceb', strokeWidth: 2 }}
        />
    </RadarChart>
  )
}

Component.displayName = 'CandidateRadarChart'
export default Component
