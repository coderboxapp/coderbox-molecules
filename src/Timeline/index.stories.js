
import React from 'react'
import { storiesOf } from '@storybook/react'
import { items } from 'mockup'
import { Box, theme } from '@coderbox/atoms'
import { withTheme } from '@coderbox/utils'
import Timeline from '.'

storiesOf('Timeline', module)
  .add('simple usage', withTheme(theme, () => {
    return (
      <Box>
        <Timeline items={items} />
      </Box>
    )
  }))
