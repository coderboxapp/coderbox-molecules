
import React from 'react'
import { storiesOf } from '@storybook/react'
import { withTheme } from '@coderbox/utils'
import { Box, theme } from '@coderbox/atoms'
import { user } from 'mockup'
import PositionForm from '.'

storiesOf('forms/PositionForm', module)
  .add('simple usage', withTheme(theme, () => {
    return (
      <div>
        <Box>
          <PositionForm
            onSubmit={d => console.log('data=', d)} />
        </Box>
      </div>
    )
  }))
