
import React from 'react'
import { storiesOf } from '@storybook/react'
import { position } from 'mockup'
import { Box, theme } from '@coderbox/atoms'
import { withTheme } from '@coderbox/utils'
import TimelineItem from '.'

storiesOf('TimelineItem', module)
  .add('simple usage', withTheme(theme, () => {
    return (
      <Box>
        <TimelineItem item={position} />
        <TimelineItem item={position} isOdd />
      </Box>
    )
  }))
