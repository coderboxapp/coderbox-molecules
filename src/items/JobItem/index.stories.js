
import React from 'react'
import { storiesOf } from '@storybook/react'
import { Box, theme } from '@coderbox/atoms'
import { withTheme } from '@coderbox/utils'
import { job } from 'mockup'
import JobItem from '.'

storiesOf('items/JobItem', module)
  .add('simple usage', withTheme(theme, () => {
    return (
      <div>
        <Box>
          <JobItem data={job} />
        </Box>
        <Box>
          <JobItem data={job} showTag showDesc />
        </Box>
      </div>
    )
  }))
