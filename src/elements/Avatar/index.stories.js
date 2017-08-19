import React from 'react'
import { storiesOf } from '@storybook/react'
import { Box } from '@coderbox/atoms'
import { withTheme } from 'utils'
import Avatar from '.'

storiesOf('elements/Avatar', module)
  .add('simple usage', withTheme(() => {
    return (
      <Box hSpace='0.5em'>
        <Avatar name='Alexandru Ghiura' email='ghalex@gmail.com' />
        <Avatar email='rusadrianewald@gmail.com' size={80} />
        <Avatar name='Alexandru Ghiura' size={60} />
      </Box>
    )
  }))
