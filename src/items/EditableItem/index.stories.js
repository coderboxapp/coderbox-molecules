// @flow
import React from 'react'
import { storiesOf } from '@storybook/react'
import { Box, theme } from '@coderbox/atoms'
import { withTheme } from '@coderbox/utils'
import EditableItem from '.'

storiesOf('items/EditableItem', module)
  .add('simple usage', withTheme(theme, () => {
    return (
      <Box>
        <EditableItem />
      </Box>
    )
  }))
