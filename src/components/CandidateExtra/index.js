import React from 'react'
import { Button, Icon, YesNo } from '@coderbox/atoms'
import { CandidateExtra } from './styles'

const Component = ({ _id, ...props }) => {
  return (
    <CandidateExtra {...props}>
      <YesNo color='success' isOutlined size='small'>
        <Button color='success' size='small'>
          <Icon name='check' />
          Accept
        </Button>
      </YesNo>
      <YesNo color='danger' isOutlined size='small'>
        <Button color='danger' size='small'>
          <Icon name='ban' />
          Reject
        </Button>
      </YesNo>
    </CandidateExtra>
  )
}

Component.displayName = 'CandidateExtra'
Component.defaultProps = {
}
export default Component
