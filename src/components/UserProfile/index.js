import React from 'react'
import { object } from 'prop-types'
import { Title, Link } from '@coderbox/atoms'
import { Location, Avatar } from 'elements'
import * as styles from './styles'

class Component extends React.Component {
  static displayName = 'UserProfile'
  static propTypes = {
    user: object
  }

  renderNoUser () {
    return (
      <div>No user to <b>render profile</b></div>
    )
  }

  render () {
    let { user } = this.props

    if (!user) {
      return this.renderNoUser()
    }

    return (
      <styles.Profile>
        <Avatar email={user.email} />
        <Title>{user.name}</Title>
        <Location location={user.location} />
        {user.url && <Link href={user.url}>{user.url}</Link>}
      </styles.Profile>
    )
  }
}

export default Component
