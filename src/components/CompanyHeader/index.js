import React from 'react'
import { Avatar, Location, Tags } from 'elements'
import { Title, Link, Subtitle } from '@coderbox/atoms'
import { CompanyProfile } from './styles'

const Component = ({ company }) => {
  if (!company) return null

  return (
    <CompanyProfile>
      <Avatar src={company.logo} />
      <Title>{company.name}</Title>
      <Location location={company.location} />
      <Link href={company.website}>{company.website}</Link>
      {company.technologies.length && [
        <Subtitle size='normal'>Our Tech Stack:</Subtitle>,
        <Tags color='white' tags={company.technologies} />
      ]}
    </CompanyProfile>
  )
}

Component.displayName = 'CompanyProfile'
export default Component
