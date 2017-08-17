
import React from 'react'
import { storiesOf } from '@storybook/react'
import { Box } from '@coderbox/atoms'
import { withTheme } from 'utils'
import { user } from 'mockup'
import UserProfile from '.'

storiesOf('Profile', module)
  .add('simple usage', withTheme(() => {
    return (
      <Box>
        <UserProfile user={user} />
      </Box>
    )
  }))
