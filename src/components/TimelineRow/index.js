// @flow
import * as React from 'react'
import cx from 'classnames'
import { reverse } from 'lodash'
import { Box, Icon, Title, Subtitle } from '@coderbox/atoms'
import { Container, Item } from './styles'

import type { Colors } from '@coderbox/atoms'

type Props = {
  title: string,
  subtitle: string,
  icon: string,
  className?: string,
  isOdd?: bool,
  children?: React.Element<*>,
  color: Colors
}

const Component = ({ title, subtitle, icon, isOdd, children, ...props }: Props) => {
  const className = cx('timeline-item', props.className)

  let childs = [
    <Item isOdd={!isOdd} key={0}>
      <Title size='large'>{title}</Title>
      <Subtitle size='small' color='gray'>{subtitle}</Subtitle>
    </Item>,
    <Icon name={icon} color={props.color} isCircular key={1} />,
    <Item key={2}>
      <Box>
        {children}
      </Box>
    </Item>
  ]

  if (isOdd) childs = reverse(childs)

  return (
    <Container {...props} className={className}>
      { childs.map(c => c) }
    </Container>
  )
}

Component.displayName = 'TimelineRow'
export default Component
