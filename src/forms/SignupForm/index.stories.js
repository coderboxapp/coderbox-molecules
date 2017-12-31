
import React from 'react'
import { storiesOf } from '@storybook/react'
import withTheme from 'withTheme'
import { Box, theme } from '@coderbox/atoms'
import SignupForm from '.'

storiesOf('forms/SignupForm', module)
  .add('simple usage', withTheme(theme, () => {
    return (
      <div>
        <Box>
          <SignupForm onSubmit={d => console.log('data=', d)} />
        </Box>
      </div>
    )
  }))
