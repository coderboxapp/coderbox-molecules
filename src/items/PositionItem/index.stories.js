
import React from 'react'
import { storiesOf } from '@storybook/react'
import { Box, theme } from '@coderbox/atoms'
import withTheme from 'withTheme'
import { position } from 'mockup'
import PositionItem from '.'

storiesOf('items/PositionItem', module)
  .add('simple usage', withTheme(theme, () => {
    return (
      <div>
        <Box>
          <PositionItem data={position} />
        </Box>
      </div>
    )
  }))
