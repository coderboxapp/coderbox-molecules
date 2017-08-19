
import React from 'react'
import { storiesOf } from '@storybook/react'
import { Box } from '@coderbox/atoms'
import { withTheme } from 'utils'
import { company } from 'mockup'
import CompanyProfile from '.'

storiesOf('components/CompanyProfile', module)
  .add('simple usage', withTheme(() => {
    return (
      <Box>
        <CompanyProfile company={company} />
      </Box>
    )
  }))
