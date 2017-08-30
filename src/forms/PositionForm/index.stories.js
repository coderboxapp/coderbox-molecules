
import React from 'react'
import { storiesOf } from '@storybook/react'
import { withTheme } from '@coderbox/utils'
import { Box, theme } from '@coderbox/atoms'
import { companies, position } from 'mockup'
import PositionForm from '.'

let suggestions = {
  companies: companies.map(c => ({
    value: c._id,
    text: c.name
  }))
}

storiesOf('forms/PositionForm', module)
  .add('simple usage', withTheme(theme, () => {
    return (
      <div>
        <Box>
          <PositionForm
            position={position}
            suggestions={suggestions}
            onSubmit={d => console.log('data=', d)} />
        </Box>
      </div>
    )
  }))
