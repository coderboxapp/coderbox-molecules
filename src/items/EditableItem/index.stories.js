// @flow
import React from 'react'
import { storiesOf } from '@storybook/react'
import { Box, theme } from '@coderbox/atoms'
import { withTheme } from '@coderbox/utils'
import { PositionForm, EducationForm } from 'forms'
import { PositionItem, EducationItem } from 'items'
import { position } from 'mockup'
import EditableItem from '.'

const formFactory = (data, props) => {
  const map = {position: PositionForm, education: EducationForm}
  const type = map[data.type]

  if (!type) return
  return React.createElement(type, { data, ...props })
}

const itemFactory = (data, props) => {
  const map = {position: PositionItem, education: EducationItem}
  const type = map[data.type]

  if (!type) return
  return React.createElement(type, { data, ...props })
}

storiesOf('items/EditableItem', module)
  .add('simple usage', withTheme(theme, () => {
    return (
      <Box>
        <EditableItem
          data={position}
          onSave={d => console.log(d)}
          onDelete={d => console.log(d)}
          {...{itemFactory, formFactory}} />
      </Box>
    )
  }))
