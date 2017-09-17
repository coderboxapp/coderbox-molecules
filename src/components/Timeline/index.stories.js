// @flow
import React from 'react'
import moment from 'moment'
import { storiesOf } from '@storybook/react'
import { Box, theme } from '@coderbox/atoms'
import { withTheme, toYears } from '@coderbox/utils'
import { items } from 'mockup'

import Timeline from '.'
import TimelienRow from '../TimelineRow'
import { EditableItem, createItem } from 'items'
import { createForm } from 'forms'

storiesOf('components/Timeline', module)
  .add('simple usage', withTheme(theme, () => {
    return (
      <Box>
        <Timeline color='primary'>
          {items.map(
            (item, index) => {
              const title = item.timePeriod.end ? moment(item.timePeriod.end).format('MMM YYYY') : 'Present'
              const subtitle = toYears(item.timePeriod)

              return (
                <TimelienRow
                  key={index}
                  title={title}
                  subtitle={subtitle}
                  isOdd={Boolean(index % 2)}
                  icon={item.icon}
                  color='primary'>

                  <EditableItem data={item} factory={{createForm, createItem}} />
                </TimelienRow>
              )
            }
          )}
        </Timeline>
      </Box>
    )
  }))
