import styled from 'styled-components'

export const Toolbar = styled.div`
  margin: 0.5em;
  position: absolute;
  top: 0;
  right: 0;

  & > .group {
    margin-right: 0.25em;
  }
`

export const ToolbarGroup = styled.div`
  display: inline-block;
  margin: 0 0.25em 0 0;
`
