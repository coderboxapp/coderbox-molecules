import styled from 'styled-components'

export const Toolbar = styled.div`
  position: ${p => p.isFixed ? 'absolute' : 'relative'};
  right: 0;
  top: 0;
  margin: 0.25em;
`
