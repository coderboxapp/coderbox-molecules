
import React from 'react'
import { storiesOf } from '@storybook/react'
import { Box, theme } from '@coderbox/atoms'
import { withTheme } from '@coderbox/utils'
import { candidate } from 'mockup'
import CandidateCharts from '.'

storiesOf('components/CandidateCharts', module)
  .add('simple usage', withTheme(theme, () => {
    return (
      <Box>
        <CandidateCharts candidate={candidate} />
      </Box>
    )
  }))
