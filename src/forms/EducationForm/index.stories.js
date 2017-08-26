
import React from 'react'
import { storiesOf } from '@storybook/react'
import { withTheme } from '@coderbox/utils'
import { Box, theme } from '@coderbox/atoms'
import EducationForm from '.'

storiesOf('forms/EducationForm', module)
  .add('simple usage', withTheme(theme, () => {
    return (
      <div>
        <Box>
          <EducationForm
            onSubmit={d => console.log('data=', d)} />
        </Box>
      </div>
    )
  }))
