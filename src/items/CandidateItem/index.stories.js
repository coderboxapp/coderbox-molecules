
import React from 'react'
import { storiesOf } from '@storybook/react'
import { Box, theme } from '@coderbox/atoms'
import { withTheme } from '@coderbox/hocs'
import { compose, withHandlers, withState } from 'recompose'
import { candidate } from 'mockup'
import CandidateItem from '.'

const Component = compose(
  withState('status', 'setStatus', 'apply'),
  withHandlers({
    onAccept: (props) => d => {
      return new Promise(resolve => {
        setTimeout(() => {
          props.setStatus('waiting')
          resolve()
        }, 1200)
      })
    }
  }),
  withTheme(theme)
)(
    ({ onAccept, status }) => {
      return (
        <div>
          <Box>
            <CandidateItem data={{...candidate, status}} onAccept={onAccept} />
          </Box>
        </div>
      )
    }
  )

const stories = storiesOf('items/CandidateItem', module)
stories.add('simple usage', () => <Component />)
