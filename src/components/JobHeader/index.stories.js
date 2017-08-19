
import React from 'react'
import { storiesOf } from '@storybook/react'
import { Box } from '@coderbox/atoms'
import { withTheme } from 'utils'
import { job } from 'mockup'

import JobHeader from '.'

storiesOf('components/JobHeader', module)
  .add('simple usage', withTheme(() => {
    return (
      <Box>
        <JobHeader job={job} />
      </Box>
    )
  }))
