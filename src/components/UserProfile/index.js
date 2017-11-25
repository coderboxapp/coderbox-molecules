import React from 'react'
import { object, string, shape } from 'prop-types'
import { compose, branch, renderComponent } from 'recompose'
import { Title, Link } from '@coderbox/atoms'
import { Location, Avatar, Tags } from 'elements'
import * as s from './styles'

const Component = ({ profile, ...props }) => {
  return (
    <s.Profile>
      <Avatar email={profile.email} />
      <Title>{profile.name}</Title>
      <Location location={profile.location} />
      {profile.technologies && <Tags color='primary' tags={profile.technologies} />}
      {profile.url && <Link href={profile.url}>{profile.url}</Link>}
    </s.Profile>
  )
}

Component.displayName = 'UserProfile'
Component.propTypes = {
  profile: shape({
    name: string,
    location: object,
    url: string
  })
}

export default compose(
  branch(
    ({ profile }) => !profile,
    renderComponent(() => <s.Profile>No user to <b>render profile</b></s.Profile>)
  )
)(Component)
