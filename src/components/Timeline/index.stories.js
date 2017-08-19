
import React from 'react'
import { storiesOf } from '@storybook/react'
import { Box, theme } from '@coderbox/atoms'
import { withTheme } from '@coderbox/utils'
import { items } from 'mockup'
import Timeline from '.'

storiesOf('components/Timeline', module)
  .add('simple usage', withTheme(theme, () => {
    return (
      <Box>
        <Timeline items={items} />
      </Box>
    )
  }))
