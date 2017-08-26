
import React from 'react'
import { storiesOf } from '@storybook/react'
import { Box } from '@coderbox/atoms'
import { withTheme } from 'utils'
import { user } from 'mockup'
import UserProfile from '.'

storiesOf('components/UserProfile', module)
  .add('simple usage', withTheme(() => {
    return (
      <div>
        <Box>
          <UserProfile profile={user} />
        </Box>
        <Box>
          <UserProfile />
        </Box>
      </div>
    )
  }))
