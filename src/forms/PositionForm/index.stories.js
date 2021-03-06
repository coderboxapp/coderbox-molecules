
import React from 'react'
import { storiesOf } from '@storybook/react'
import withTheme from 'withTheme'
import { Box, theme } from '@coderbox/atoms'
import { companies, titles, technologies, position } from 'mockup'
import PositionForm from '.'

let suggestions = {
  companies,
  titles: titles,
  technologies
}
const handleSave = (data) => {
  return new Promise(resolve => {
    console.log(data)
    resolve()
  })
}

storiesOf('forms/PositionForm', module)
  .add('simple usage', withTheme(theme, () => {
    return (
      <div>
        <Box>
          <PositionForm
            data={position}
            suggestions={suggestions}
            onSubmit={handleSave} />
        </Box>
      </div>
    )
  }))
