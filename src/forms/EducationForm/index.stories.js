
import React from 'react'
import { storiesOf } from '@storybook/react'
import { withTheme } from '@coderbox/utils'
import { Box, theme } from '@coderbox/atoms'
import { technologies, education } from 'mockup'
import EducationForm from '.'

let suggestions = {
  technologies
}

storiesOf('forms/EducationForm', module)
  .add('simple usage', withTheme(theme, () => {
    return (
      <div>
        <Box>
          <EducationForm
            data={education}
            suggestions={suggestions}
            onSubmit={d => console.log('data=', d)} />
        </Box>
      </div>
    )
  }))
