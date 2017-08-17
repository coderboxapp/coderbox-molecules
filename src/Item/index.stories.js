
import React from 'react'
import { storiesOf } from '@storybook/react'
import { transform, withTheme } from '@coderbox/utils'
import { Box, Title, Subtitle, Text, Link, theme } from '@coderbox/atoms'
import { position } from 'mockup'
import Item from '.'

storiesOf('Item', module)
  .add('simple usage', withTheme(theme, () => {
    return (
      <div>
        <Box>
          <Item image='https://cdn.dribbble.com/users/373338/screenshots/2558656/batman_avatar_dribbbb_1x.png'>
            <Title size='large'>Batman Item</Title>
            <Subtitle size='normal' color='gray'><Link>@batman</Link>, Romania</Subtitle>
            <Text color='success' tone={1}>price: 2000 €</Text>
            <Text>version: 1.0.0</Text>
          </Item>
        </Box>
        <Box>
          <Item item={transform(position)} />
        </Box>
      </div>
    )
  }))
