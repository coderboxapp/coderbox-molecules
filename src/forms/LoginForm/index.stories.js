
import React from 'react'
import { storiesOf } from '@storybook/react'
import { withTheme } from '@coderbox/utils'
import { Box, theme } from '@coderbox/atoms'
import LoginForm from '.'

storiesOf('forms/LoginForm', module)
  .add('simple usage', withTheme(theme, () => {
    return (
      <div>
        <Box>
          <LoginForm status='Incorrect password' onSubmit={d => console.log('data=', d)} />
        </Box>
      </div>
    )
  }))
