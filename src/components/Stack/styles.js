import styled, { keyframes } from 'styled-components'

const fade = keyframes`
  from {
    opacity: 0;
    transform: translateX(100%);
  }

  to {
    opacity: 1;
    transform: translateX(0);
  }
`

export const Stack = styled.div`
  position: relative;
  overflow: hidden;
`

export const StackItem = styled.div`
  display: ${p => p.isVisible ? 'block' : 'none'};
  padding: 1px 0;
  animation: ${fade} 0.25s linear;
`