import React from 'react'
import { Icon } from '@coderbox/atoms'
import * as styles from './styles'

const Location = ({ location, ...props }) => {
  let formattedLocation = location ? location.formatted_address : 'No Location'

  return (
    <styles.Location {...props}>
      <Icon color='gray' name='map-marker' {...props} />
      {formattedLocation}
    </styles.Location>
  )
}

export default Location
