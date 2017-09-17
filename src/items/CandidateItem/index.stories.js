
import React from 'react'
import { storiesOf } from '@storybook/react'
import { Box, theme } from '@coderbox/atoms'
import { withTheme } from '@coderbox/utils'
import { candidate } from 'mockup'
import CandidateItem from '.'

storiesOf('items/CandidateItem', module)
  .add('simple usage', withTheme(theme, () => {
    return (
      <div>
        <Box>
          <CandidateItem data={candidate} />
        </Box>
      </div>
    )
  }))
