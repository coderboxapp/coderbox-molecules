
import React from 'react'
import { storiesOf } from '@storybook/react'
import { Box } from '@coderbox/atoms'
import { withTheme } from 'utils'
import { user } from 'mockup'
import { UserProfile, StackEditToolbar } from 'components'
import { UserProfileForm } from 'forms'
import Stack from '.'

storiesOf('components/SackView', module)
  .add('simple usage', withTheme(() => {
    return (
      <div>
        <Box>
          <Stack toolbar={<StackEditToolbar isFixed />}>
            <UserProfile profile={user} />
            <UserProfileForm profile={user} />
          </Stack>
        </Box>
      </div>
    )
  }))