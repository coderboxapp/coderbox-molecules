
import React from 'react'
import { storiesOf } from '@storybook/react'
import { withTheme } from '@coderbox/utils'
import { Box, theme } from '@coderbox/atoms'
import { user } from 'mockup'
import ProfileForm from '.'

storiesOf('forms/UserProfileForm', module)
  .add('simple usage', withTheme(theme, () => {
    return (
      <div>
        <Box>
          <ProfileForm
            data={user}
            onSubmit={d => console.log('data=', d)} />
        </Box>
      </div>
    )
  }))
