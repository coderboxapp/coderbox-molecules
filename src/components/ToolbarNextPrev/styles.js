import styled from 'styled-components'

export const Toolbar = styled.div`
  position: ${p => p.isFixed ? 'absolute' : 'block'};
  right: 0;
  top: 0;
`
