
import React from 'react'
import { storiesOf } from '@storybook/react'
import { withTheme } from '@coderbox/utils'
import { Box, theme } from '@coderbox/atoms'
import { technologies, job } from 'mockup'
import JobForm from '.'

let suggestions = {
  technologies
}

storiesOf('forms/JobForm', module)
  .add('simple usage', withTheme(theme, () => {
    return (
      <div>
        <Box>
          <JobForm
            data={job}
            suggestions={suggestions}
            onSubmit={d => console.log('data=', d)} />
        </Box>
      </div>
    )
  }))
