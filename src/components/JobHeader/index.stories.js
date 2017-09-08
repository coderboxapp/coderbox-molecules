
import React from 'react'
import { storiesOf } from '@storybook/react'
import { Box, theme } from '@coderbox/atoms'
import { withTheme } from '@coderbox/utils'
import { job } from 'mockup'

import JobHeader from '.'

storiesOf('components/JobHeader', module)
  .add('simple usage', withTheme(theme, () => {
    return (
      <Box>
        <JobHeader job={job} />
      </Box>
    )
  }))
