
import React from 'react'
import { storiesOf } from '@storybook/react'
import { withTheme } from '@coderbox/utils'
import { Box, theme } from '@coderbox/atoms'
import { technologies, institutions, education } from 'mockup'
import EducationForm from '.'

const suggestions = {
  institutions,
  technologies
}

const handleSave = (data) => {
  return new Promise(resolve => {
    console.log(data)
    resolve()
  })
}

storiesOf('forms/EducationForm', module)
  .add('simple usage', withTheme(theme, () => {
    return (
      <div>
        <Box>
          <EducationForm
            data={education}
            suggestions={suggestions}
            onSubmit={handleSave} />
        </Box>
      </div>
    )
  }))
