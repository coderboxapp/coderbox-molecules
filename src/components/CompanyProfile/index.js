import React from 'react'
import { Avatar, Location, Markdown } from 'elements'
import { Title } from '@coderbox/atoms'
import { CompanyProfile } from './styles'

const Component = ({ company }) => {
  if (!company) return null

  return (
    <CompanyProfile>
      <Avatar src={company.logo} />
      <Title>{company.name}</Title>
      <Location location={company.location} />
      <div className='bio'>
        <Markdown source={company.shortBio} />
      </div>
    </CompanyProfile>
  )
}

Component.displayName = 'CompanyProfile'
export default Component
