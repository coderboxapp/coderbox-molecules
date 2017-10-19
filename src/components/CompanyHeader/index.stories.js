
import React from 'react'
import { storiesOf } from '@storybook/react'
import { Box, theme } from '@coderbox/atoms'
import { withTheme } from '@coderbox/utils'
import { company } from 'mockup'
import CompanyProfile from '.'

const stories = storiesOf('components/CompanyHeader', module)

stories.add('simple usage', withTheme(theme, () => {
  return (
    <Box color='light'>
      <CompanyProfile company={company} />
    </Box>
  )
}))
