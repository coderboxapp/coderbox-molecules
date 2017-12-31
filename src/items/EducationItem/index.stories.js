import React from 'react'
import { storiesOf } from '@storybook/react'
import { Box, theme } from '@coderbox/atoms'
import withTheme from 'withTheme'
import { education } from 'mockup'
import EducationItem from '.'

storiesOf('items/EducationItem', module)
  .add('simple usage', withTheme(theme, () => {
    return (
      <div>
        <Box>
          <EducationItem data={education} />
        </Box>
      </div>
    )
  }))
