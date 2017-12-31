import React from 'react'
import { storiesOf, action } from '@storybook/react'
import { Field, Control } from '@coderbox/forms'
import { Icon, theme } from '@coderbox/atoms'
import withTheme from 'withTheme'
import AutocompleteLocation from '.'

storiesOf('components/AutocompleteLocation', module)
  .add('simple usage', withTheme(theme, () => {
    return (
      <div>
        <Field>
          <Control hasLeftIcon>
            <Icon name='map' className='left' />
            <AutocompleteLocation
              placeholder='Type city'
              onChange={action('tag: ')} />
          </Control>
        </Field>
      </div>
    )
  }))
