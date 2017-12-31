
import React from 'react'
import { storiesOf } from '@storybook/react'
import withTheme from 'withTheme'
import { Box, theme } from '@coderbox/atoms'
import { technologies, project } from 'mockup'
import ProjectForm from '.'

let suggestions = {
  technologies
}
const handleSave = (data) => {
  return new Promise(resolve => {
    console.log(data)
    resolve()
  })
}

storiesOf('forms/ProjectForm', module)
  .add('simple usage', withTheme(theme, () => {
    return (
      <div>
        <Box>
          <ProjectForm
            data={project}
            suggestions={suggestions}
            onSubmit={handleSave} />
        </Box>
      </div>
    )
  }))
