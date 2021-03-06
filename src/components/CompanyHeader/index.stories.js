
import React from 'react'
import { storiesOf } from '@storybook/react'
import { Box, theme } from '@coderbox/atoms'
import withTheme from 'withTheme'
import { company } from 'mockup'
import CompanyProfile from '.'

const stories = storiesOf('components/CompanyHeader', module)

stories.add('simple usage', withTheme(theme, () => {
  return (
    <Box>
      <CompanyProfile company={company} />
    </Box>
  )
}))
