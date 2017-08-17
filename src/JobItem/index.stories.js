
import React from 'react'
import { storiesOf } from '@storybook/react'
import { Box, theme } from '@coderbox/atoms'
import { withTheme } from '@coderbox/utils'
import { job } from 'mockup'
import Component from '.'

let job2 = {...job}

job2.createdAt = new Date()
job2.title = 'Super Manager'

storiesOf('JobItem', module)
  .add('simple usage', withTheme(theme, () => {
    return (
      <div>
        <Box>
          <Component item={job} />
        </Box>
        <Box>
          <Component item={job2} />
        </Box>
      </div>
    )
  }))
