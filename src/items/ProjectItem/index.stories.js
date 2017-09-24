
import React from 'react'
import { storiesOf } from '@storybook/react'
import { Box, theme } from '@coderbox/atoms'
import { withTheme } from '@coderbox/utils'
import { project } from 'mockup'
import ProjectItem from '.'

storiesOf('items/ProjectItem', module)
  .add('simple usage', withTheme(theme, () => {
    return (
      <div>
        <Box>
          <ProjectItem data={project} />
        </Box>
      </div>
    )
  }))
