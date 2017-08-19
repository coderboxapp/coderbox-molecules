
import React from 'react'
import { storiesOf } from '@storybook/react'
import { Box, theme } from '@coderbox/atoms'
import { withTheme } from '@coderbox/utils'
import { education } from 'mockup'
import EducationItem from '.'

storiesOf('items/EducationItem', module)
  .add('simple usage', withTheme(theme, () => {
    return (
      <div>
        <Box>
          <EducationItem item={education} />
        </Box>
      </div>
    )
  }))
