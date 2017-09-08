
import React from 'react'
import { storiesOf } from '@storybook/react'
import { withTheme } from '@coderbox/utils'
import { Box, theme } from '@coderbox/atoms'
import { companies, titles, technologies, position } from 'mockup'
import PositionForm from '.'

let suggestions = {
  companies,
  titles,
  technologies
}

storiesOf('forms/PositionForm', module)
  .add('simple usage', withTheme(theme, () => {
    return (
      <div>
        <Box>
          <PositionForm
            data={position}
            suggestions={suggestions}
            onSubmit={d => console.log('data=', d)} />
        </Box>
      </div>
    )
  }))
