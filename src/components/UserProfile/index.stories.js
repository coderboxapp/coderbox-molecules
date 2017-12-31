
import React from 'react'
import { storiesOf } from '@storybook/react'
import { Box, theme } from '@coderbox/atoms'
import withTheme from 'withTheme'
import { user } from 'mockup'
import UserProfile from '.'

storiesOf('components/UserProfile', module)
  .add('simple usage', withTheme(theme, () => {
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
