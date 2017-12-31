
import React from 'react'
import { storiesOf } from '@storybook/react'
import withTheme from 'withTheme'
import { Box, theme } from '@coderbox/atoms'
import { user } from 'mockup'
import ProfileForm from '.'

storiesOf('forms/UserProfileForm', module)
  .add('simple usage', withTheme(theme, () => {
    console.log(user)
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
