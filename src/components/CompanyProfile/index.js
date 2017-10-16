import React from 'react'
import { Avatar, Location } from 'elements'
import { Title } from '@coderbox/atoms'
import { CompanyProfile } from './styles'

const Component = ({ company }) => {
  if (!company) return null

  return (
    <CompanyProfile>
      <Avatar src={company.logo} />
      <Title>{company.name}</Title>
      <Location location={company.location} />
    </CompanyProfile>
  )
}

Component.displayName = 'CompanyProfile'
export default Component
