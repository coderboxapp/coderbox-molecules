
import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { withTheme } from '@coderbox/utils'
import { Box, theme } from '@coderbox/atoms'
import LoginForm from '.'

const handleSubmit = (data) => {
  return new Promise(resolve => {
    action('form submited')(data)
    resolve()
  })
}

storiesOf('forms/LoginForm', module)
  .add('simple usage', withTheme(theme, () => {
    return (
      <div>
        <Box>
          <LoginForm onSubmit={handleSubmit} />
        </Box>
      </div>
    )
  }))
