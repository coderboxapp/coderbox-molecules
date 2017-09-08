
import React from 'react'
import { storiesOf } from '@storybook/react'
import { Box, theme } from '@coderbox/atoms'
import { withTheme } from '@coderbox/utils'
import { company } from 'mockup'
import CompanyProfile from '.'

storiesOf('components/CompanyProfile', module)
  .add('simple usage', withTheme(theme, () => {
    return (
      <Box>
        <CompanyProfile company={company} />
      </Box>
    )
  }))
