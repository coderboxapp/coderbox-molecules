import React from 'react'
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from 'recharts'

const Component = ({ data, ...props }) => {
  return (
    <AreaChart width={600} height={300} data={data} margin={{ left: -20 }} {...props}>
      <Legend layout='horizontal' verticalAlign='top' height={40} />
      <XAxis dataKey='category' />
      <YAxis />
      <CartesianGrid />
      <Tooltip />
      <Area
        type='linear'
        name='Job'
        dataKey='job'
        stackId='1'
        fill='#5fba7d'
        stroke='#5fba7d'
        legendType='rect'
        dot={{ stroke: '#5fba7d', strokeWidth: 2 }}
        />
      <Area
        type='linear'
        name='Candidate'
        dataKey='profile'
        stackId='2'
        fill='#1b8ceb'
        fillOpacity={0.5}
        stroke='#1b8ceb'
        legendType='rect'
        dot={{ stroke: '#1b8ceb', strokeWidth: 2 }}
        />
    </AreaChart>
  )
}

Component.displayName = 'CandidateAreaChart'
export default Component
