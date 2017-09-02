import React from 'react'
import { storiesOf, action } from '@storybook/react'
import { Field, Control } from '@coderbox/forms'
import { Icon } from '@coderbox/atoms'
import { withTheme } from 'utils'
import AutocompleteLocation from '.'

storiesOf('components/AutocompleteLocation', module)
  .add('simple usage', withTheme(() => {
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
