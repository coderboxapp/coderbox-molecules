// @flow
import React from 'react'
import { storiesOf } from '@storybook/react'
import { Box, theme } from '@coderbox/atoms'
import { withTheme } from '@coderbox/hocs'
import { position } from 'mockup'
import { compose, withHandlers } from 'recompose'
import EditableItem from '.'
import { createItem } from 'items'
import { createForm } from 'forms'

const Component = compose(
  withHandlers({
    onSave: (props) => d => {
      return new Promise(resolve => {
        setTimeout(resolve, 1200)
      })
    },
    onDelete: (props) => (item) => console.log('Delete: ', item)
  }),
  withTheme(theme)
)(
  ({ onSave, onDelete }) => {
    return (
      <Box>
        <EditableItem
          data={position}
          onSave={onSave}
          onDelete={onDelete}
          factory={{createForm, createItem}} />
      </Box>
    )
  }
)

const stories = storiesOf('items/EditableItem', module)
stories.add('simple usage', () => <Component />)
