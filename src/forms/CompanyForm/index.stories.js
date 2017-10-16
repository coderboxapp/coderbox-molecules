
import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { withTheme } from '@coderbox/utils'
import { Box, theme } from '@coderbox/atoms'
import { company } from 'mockup'
import CompanyForm from '.'

storiesOf('forms/CompanyForm', module)
  .add('simple usage', withTheme(theme, () => {
    return (
      <div>
        <Box>
          <CompanyForm
            data={company}
            onSubmit={action('profile: ')} />
        </Box>
      </div>
    )
  }))
