
import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { position } from 'mockup'
import { Box, theme } from '@coderbox/atoms'
import { withTheme } from '@coderbox/utils'
import TimelineItem from '.'

storiesOf('items/TimelineItem', module)
  .add('simple usage', withTheme(theme, () => {
    return (
      <Box>
        <TimelineItem
          data={position}
          onSave={d => console.log(d)}
          onDelete={d => console.log('detele: ', d)} />
      </Box>
    )
  }))
