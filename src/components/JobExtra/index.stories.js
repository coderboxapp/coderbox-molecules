
import React from 'react'
import { storiesOf } from '@storybook/react'
import { Box, theme } from '@coderbox/atoms'
import withTheme from 'withTheme'
import { job } from 'mockup'

import JobExtra from '.'
import { EditableItem, createItem } from 'items'
import { createForm } from 'forms'

storiesOf('components/JobExtra', module)
  .add('simple usage', withTheme(theme, () => {
    return (
      <div>
        <Box>
          <EditableItem data={job} factory={{createForm, createItem}} />
          <JobExtra job={job} />
        </Box>
      </div>
    )
  }))
